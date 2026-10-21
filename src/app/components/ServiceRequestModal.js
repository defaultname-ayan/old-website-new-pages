'use client';
import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Users, Heart, Activity } from 'lucide-react';

const INITIAL_DATA = {
  beneficiary: '', 
  userName: '',
  userAge: '', 
  userPhoneCode: '+91',
  userPhone: '',
  userEmail: '',
  userCountry: 'India',
  userCountryOther: '',
  userState: '',
  userCity: '',
  userDistrict: '',
  userPincode: '',
  userAddressOther: '', 
  
  fatherAge: '',
  motherAge: '',
  relationType: '',
  relativeName: '',
  relativeAge: '',
  
  clientCountry: 'India',
  clientCountryOther: '',
  clientState: '',
  clientCity: '',
  clientDistrict: '',
  clientPincode: '',
  clientAddressOther: '',
  
  healthCondition: '',
  healthConditionDetails: '',
  serviceTypes: [],
  budgetMin: '',
  budgetMax: '',
  
  prefState: '',
  prefStateOther: '',
  prefDistrict: '',
  prefCity: '',
  prefArea: '',
  prefPincode: '',
  prefLandmark: '',
  notes: ''
};

export default function ServiceRequestModal({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); 
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [serviceError, setServiceError] = useState(false); 
  
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (isOpen) {
      setSubmitStatus(null);
      setFormData(INITIAL_DATA);
      setServiceError(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'serviceTypes') {
       setServiceError(false);
    }

    if (name === 'userPhone') {
        const numericValue = value.replace(/\D/g, ''); 
        if (formData.userPhoneCode === '+91') {
            if (numericValue.length <= 10) setFormData({ ...formData, [name]: numericValue });
        } else {
            if (numericValue.length <= 15) setFormData({ ...formData, [name]: numericValue });
        }
        return; 
    }

    if (type === 'checkbox' && name === 'serviceTypes') {
        let updatedServices = [...formData.serviceTypes];
        if (checked) updatedServices.push(value);
        else updatedServices = updatedServices.filter(item => item !== value);
        setFormData({ ...formData, serviceTypes: updatedServices });
    } else if (type === 'checkbox') {
        setFormData({ ...formData, [name]: checked });
    } else {
        setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.serviceTypes.length === 0) {
        setServiceError(true);
        const errorElement = document.getElementById('service-error');
        if (errorElement) errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    let prefLocationString = '';
    if (formData.prefState === 'Other') {
        prefLocationString = `State: ${formData.prefStateOther}, District: ${formData.prefDistrict}, City: ${formData.prefCity}`;
    } else {
        prefLocationString = `State: ${formData.prefState}, District: ${formData.prefDistrict}, City: ${formData.prefCity}`;
    }

    const getAddressString = (prefix) => {
        const country = formData[`${prefix}Country`];
        const countryOther = formData[`${prefix}CountryOther`];
        
        if (country === 'India') {
            return `${formData[`${prefix}City`]}, ${formData[`${prefix}District`]}, ${formData[`${prefix}State`]} - ${formData[`${prefix}Pincode`]}`;
        } else if (country === 'Other') {
            return `${formData[`${prefix}AddressOther`]} (Country: ${countryOther})`;
        } else {
            return `${formData[`${prefix}AddressOther`]} (${country})`;
        }
    };

    const formattedMessage = `
      NEW SAANIDHYAM SERVICE REQUEST
      --------------------------------
      Request For: ${formData.beneficiary.toUpperCase()}
      
      --- FILLER / CLIENT DETAILS ---
      Name: ${formData.userName}
      Age: ${formData.userAge}
      Phone: ${formData.userPhoneCode} ${formData.userPhone}
      Email: ${formData.userEmail}
      Address: ${getAddressString('user')}

      --- BENEFICIARY DETAILS (If not Self) ---
      ${formData.beneficiary === 'parents' ? `Father Age: ${formData.fatherAge}\nMother Age: ${formData.motherAge}` : ''}
      ${formData.beneficiary === 'grandparents' ? `Grandfather Age: ${formData.fatherAge}\nGrandmother Age: ${formData.motherAge}` : ''}
      ${formData.beneficiary === 'relatives' ? `Relation: ${formData.relationType}\nName: ${formData.relativeName}\nAge: ${formData.relativeAge}` : ''}
      
      ${formData.beneficiary !== 'myself' ? `Beneficiary Location: ${getAddressString('client')}` : 'Location: Same as above'}

      --- CARE REQUIREMENTS ---
      Condition: ${formData.healthCondition}
      ${formData.healthCondition === 'Other' ? `Details: ${formData.healthConditionDetails}` : ''}
      Services Needed: ${formData.serviceTypes.join(', ')}
      Budget: ₹${formData.budgetMin} - ₹${formData.budgetMax}
      
      Preferred Location Details:
      ${prefLocationString}
      Area: ${formData.prefArea}
      Pincode: ${formData.prefPincode}
      Landmark: ${formData.prefLandmark}

      Notes: ${formData.notes}
    `;

    try {
        const response = await fetch(`${apiUrl}/api/send-email/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.userName,
                email: formData.userEmail,
                subject: `Saanidhyam Request: ${formData.userName} for ${formData.beneficiary}`,
                message: formattedMessage,
                to: 'info@satorufoundation.org', 
            }),
        });

        if (response.ok) {
            setSubmitStatus('success');
            setTimeout(() => {
                onClose(); 
            }, 6000);
        } else {
            console.error("Server responded with an error");
            setSubmitStatus('error');
        }

    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderAddressFields = (prefix, countryValue) => (
    <div className="space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div>
            <label className="block text-sm md:text-base font-medium text-gray-700 mb-1">Country *</label>
            <input 
                list={`${prefix}Countries`} 
                name={`${prefix}Country`} 
                value={countryValue} 
                onChange={handleInputChange} 
                className="w-full p-3 md:p-4 text-sm md:text-lg border rounded focus:ring-2 focus:ring-[#5E6F47] outline-none"
                placeholder="Select or type country..."
                autoComplete="off"
            />
            <datalist id={`${prefix}Countries`}>
                <option value="India" />
                <option value="USA" />
                <option value="UK" />
                <option value="Australia" />
                <option value="Canada" />
                <option value="UAE" />
                <option value="Singapore" />
                <option value="Germany" />
                <option value="Other" />
            </datalist>
        </div>

        {countryValue === 'India' ? (
            <div className="grid grid-cols-2 gap-3 md:gap-6">
                <input type="text" name={`${prefix}State`} placeholder="State *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" required />
                <input type="text" name={`${prefix}District`} placeholder="District *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" required />
                <input type="text" name={`${prefix}City`} placeholder="City/Town *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" required />
                <input type="text" name={`${prefix}Pincode`} placeholder="Pincode *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" maxLength={6} required />
            </div>
        ) : (
            <>
                {countryValue === 'Other' && (
                    <div className="mb-3">
                        <input 
                            type="text" 
                            name={`${prefix}CountryOther`} 
                            placeholder="Please specify country *" 
                            onChange={handleInputChange} 
                            className="w-full p-3 md:p-4 text-sm md:text-lg border rounded focus:ring-2 focus:ring-[#5E6F47] outline-none" 
                            required 
                        />
                    </div>
                )}
                <textarea name={`${prefix}AddressOther`} rows={2} placeholder="Enter full address here *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" required></textarea>
            </>
        )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-hidden" onClick={onClose}>
        <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            
            <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-100 bg-[#f4f6f0] shrink-0">
                <h2 className="text-xl md:text-3xl font-bold text-[#5E6F47]">Service Request</h2>
                <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition"><X className="w-6 h-6 md:w-8 md:h-8 text-gray-600" /></button>
            </div>

            <div className="p-4 md:p-8 overflow-y-auto custom-scrollbar flex-1">
                {submitStatus === 'success' ? (
                    <div className="text-center py-12">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                            <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-green-600" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#5E6F47] mb-4">Request Received!</h3>
                        
                        {(formData.prefState === 'Telangana' || formData.prefState === 'Andhra Pradesh') ? (
                            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
                                Thank you for trusting us, we will be actively looking at your request, we will get back to you in 2 working days.
                            </p>
                        ) : (
                            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
                                Thank you for trusting us, for the preferred location you requested we do not have the information. We will get back to you soon.
                            </p>
                        )}

                        <button onClick={onClose} className="mt-8 px-8 py-3 text-base md:text-lg bg-[#5E6F47] text-white rounded-lg hover:bg-[#4a5a38]">Close</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
                        
                        {submitStatus === 'error' && (
                            <div className="bg-red-50 text-red-600 p-4 md:p-6 text-sm md:text-lg rounded-lg border border-red-200">
                                Something went wrong. Please try again or check your internet connection.
                            </div>
                        )}

                        <div className="space-y-4 md:space-y-6">
                            <label className="text-lg md:text-2xl font-bold text-[#5E6F47] block">Whom do you seek services for? *</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                                {['Myself', 'Parents', 'Grandparents', 'Relatives'].map((option) => (
                                    <label key={option} className={`cursor-pointer border-2 rounded-xl p-4 md:p-6 text-center transition-all ${formData.beneficiary === option.toLowerCase() ? 'border-[#5E6F47] bg-[#5E6F47]/10 text-[#5E6F47] font-bold' : 'border-gray-200 hover:border-[#ECC750] text-gray-600'}`}>
                                        <input type="radio" name="beneficiary" value={option.toLowerCase()} checked={formData.beneficiary === option.toLowerCase()} onChange={handleInputChange} className="hidden" />
                                        <span className="text-base md:text-xl">{option}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="bg-[#ECC750]/10 border border-[#ECC750] p-4 md:p-6 rounded-lg text-sm md:text-lg text-[#5E6F47]">
                                <span className="font-bold">Note:</span> Please provide details so we can assist you better.
                            </div>
                        </div>

                        {formData.beneficiary && (
                        <>
                            <div className="space-y-4 md:space-y-6">
                                <h3 className="text-xl md:text-2xl font-bold text-[#5E6F47] flex items-center gap-2"><Users className="w-5 h-5 md:w-6 md:h-6" /> Your Details</h3>
                                <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                                    <input type="text" name="userName" placeholder="Full Name *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" required />
                                    <input type="number" name="userAge" placeholder="Age *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" required />
                                    <input type="email" name="userEmail" placeholder="Email Address" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" />
                                    
                                    <div className="md:col-span-2 flex gap-3 md:gap-4">
                                        <div className="w-24 md:w-32 relative">
                                          <input 
                                            list="phoneCodes" 
                                            name="userPhoneCode" 
                                            value={formData.userPhoneCode} 
                                            onChange={handleInputChange} 
                                            className="p-3 md:p-4 text-sm md:text-lg border rounded w-full bg-white text-center" 
                                            placeholder="+91" 
                                          />
                                          <datalist id="phoneCodes">
                                              <option value="+91" />
                                              <option value="+1" />
                                              <option value="+44" />
                                              <option value="+61" />
                                              <option value="+971" />
                                          </datalist>
                                        </div>
                                        <input 
                                            type="tel" 
                                            name="userPhone" 
                                            placeholder="Phone Number *" 
                                            value={formData.userPhone}
                                            onChange={handleInputChange} 
                                            className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" 
                                            required 
                                        />
                                    </div>
                                </div>
                                <p className="text-base md:text-lg font-bold text-gray-600 mt-2">Your Current Address:</p>
                                {renderAddressFields('user', formData.userCountry)}
                            </div>

                            {formData.beneficiary !== 'myself' && (
                                <div className="space-y-4 md:space-y-6 pt-6 border-t border-gray-100">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#5E6F47] flex items-center gap-2"><Heart className="w-5 h-5 md:w-6 md:h-6" /> Beneficiary Details</h3>
                                    {(formData.beneficiary === 'parents' || formData.beneficiary === 'grandparents') && (
                                        <div className="grid md:grid-cols-2 gap-3 md:gap-6 bg-gray-50 p-4 md:p-6 rounded-lg">
                                            <div>
                                                <label className="block text-base md:text-lg font-bold text-gray-700 mb-2">
                                                    {formData.beneficiary === 'parents' ? 'Father Age *' : 'Grandfather Age *'}
                                                </label>
                                                <input type="number" name="fatherAge" placeholder="Enter Age *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" required />
                                            </div>
                                            <div>
                                                <label className="block text-base md:text-lg font-bold text-gray-700 mb-2">
                                                    {formData.beneficiary === 'parents' ? 'Mother Age *' : 'Grandmother Age *'}
                                                </label>
                                                <input type="number" name="motherAge" placeholder="Enter Age *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" required />
                                            </div>
                                        </div>
                                    )}
                                    {formData.beneficiary === 'relatives' && (
                                        <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                                            <input type="text" name="relationType" placeholder="Relation (e.g., Uncle) *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" required />
                                            <input type="text" name="relativeName" placeholder="Name *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" required />
                                            <input type="number" name="relativeAge" placeholder="Age *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" required />
                                        </div>
                                    )}
                                    <p className="text-base md:text-lg font-bold text-gray-600 mt-2">Beneficiary's Current Address:</p>
                                    {renderAddressFields('client', formData.clientCountry)}
                                </div>
                            )}

                            <div className="space-y-4 md:space-y-6 pt-6 border-t border-gray-100">
                                <h3 className="text-xl md:text-2xl font-bold text-[#5E6F47] flex items-center gap-2"><Activity className="w-5 h-5 md:w-6 md:h-6" /> Care Requirements</h3>
                                <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                                    <select name="healthCondition" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded bg-white" required>
                                        <option value="">Select Client Condition *</option>
                                        <option value="Need assistance for daily activities">Need assistance for daily activities</option>
                                        <option value="Doesn't need any assistance for daily activities">Doesn't need any assistance for daily activities</option>
                                        <option value="Bedridden">Bedridden</option>
                                        <option value="Dementia">Dementia</option>
                                        <option value="Wheelchair-bound">Wheelchair-bound</option>
                                        <option value="Post-surgery Recovery">Post-surgery Recovery</option>
                                        <option value="Alzheimer's">Alzheimer's</option>
                                        <option value="Parkinson's">Parkinson's</option>

                                        <option value="Other">Other</option>
                                    </select>
                                    
                                    {formData.healthCondition === 'Other' && (
                                        <input type="text" name="healthConditionDetails" placeholder="Client Health Condition Details *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" required />
                                    )}
                                </div>
                                
                                <div id="service-error">
                                    <label className="block text-base md:text-lg font-medium text-gray-700 mb-3">
                                        Service Types Needed <span className="text-black-500">*</span>
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                                        {['Old Age Home', 'Assisted Living', 'Nursing Care', 'Day Care', 'Home Care', 'Dementia Care', 'Palliative Care', 'Senior residential living', 'Retirement homes'].map(type => (
                                            <label key={type} className="flex items-center space-x-3 text-sm md:text-lg bg-gray-50 p-3 rounded cursor-pointer hover:bg-gray-100">
                                                <input type="checkbox" name="serviceTypes" value={type} onChange={handleInputChange} className="w-4 h-4 md:w-5 md:h-5 text-[#5E6F47]" />
                                                <span>{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {serviceError && <p className="text-red-500 text-sm mt-2 font-semibold">Please select at least one service type.</p>}
                                </div>

                                <div className="space-y-4 bg-[#f4f6f0] p-4 md:p-6 rounded-lg">
                                    <label className="block text-base md:text-lg font-bold text-[#5E6F47]">Budget Range</label>
                                    <div className="flex gap-3 md:gap-6">
                                        <input type="number" name="budgetMin" placeholder="Budget Min (₹) *" onChange={handleInputChange} className="w-1/2 p-3 md:p-4 text-sm md:text-lg border rounded" required />
                                        <input type="number" name="budgetMax" placeholder="Budget Max (₹) *" onChange={handleInputChange} className="w-1/2 p-3 md:p-4 text-sm md:text-lg border rounded" required />
                                    </div>
                                </div>
                                
                                <div className="space-y-4 bg-[#f4f6f0] p-4 md:p-6 rounded-lg">
                                    <label className="block text-base md:text-lg font-bold text-[#5E6F47]">Your preferred location-elder care service provider</label>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                                        <div>
                                            <select name="prefState" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded bg-white" required>
                                                <option value="">Select State *</option>
                                                <option value="Telangana">Telangana</option>
                                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            {formData.prefState === 'Other' && (
                                                <input type="text" name="prefStateOther" placeholder="Enter State Name *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded mt-3" required />
                                            )}
                                        </div>
                                        <input type="text" name="prefDistrict" placeholder="District *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" required />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                                        <input type="text" name="prefCity" placeholder="City/Town *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" required />
                                        <input type="text" name="prefArea" placeholder="Area / Community / Apartments *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" required />
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 md:gap-6">
                                        <input type="text" name="prefPincode" placeholder="Pincode *" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" required />
                                        <input type="text" name="prefLandmark" placeholder="Landmark (Optional)" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded" />
                                    </div>
                                </div>

                                <textarea name="notes" rows={2} placeholder="Any specific requirements... (Optional)" onChange={handleInputChange} className="w-full p-3 md:p-4 text-sm md:text-lg border rounded"></textarea>
                            </div>

                            <div className="flex justify-end gap-6 pt-6 border-t border-gray-100">
                                <button type="button" onClick={onClose} className="px-6 py-2 md:px-8 md:py-3 text-base md:text-lg text-gray-500 hover:text-gray-700 font-semibold">Cancel</button>
                                <button type="submit" disabled={isSubmitting} className="px-8 py-3 md:px-10 md:py-4 bg-[#5E6F47] text-white text-lg md:text-xl font-bold rounded-lg hover:bg-[#4a5a38] shadow-lg disabled:opacity-70">
                                    {isSubmitting ? 'Submitting...' : 'Find Providers'}
                                </button>
                            </div>
                        </>
                        )}
                    </form>
                )}
            </div>
        </div>
    </div>
  );
}