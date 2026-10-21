'use client';

import { useState, useEffect } from 'react';
import DirectorProfile from "@/app/components/Director";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import TeamMemberCard from "@/app/components/TeamMemberCard";

const OurTeamPage = () => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTeam();
    }, []);

    const fetchTeam = async () => {
        try {
            const response = await fetch('/api/team');
            if (!response.ok) throw new Error('Failed to fetch team');
            const data = await response.json();
            setTeam(data);
        } catch (error) {
            console.error('Error fetching team:', error);
        } finally {
            setLoading(false);
        }
    };

    return(
        <main className="min-h-screen">
            <Navbar />
            <section className="bg-[#5e6f47] text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Meet the dedicated individuals behind Satoru Foundation, committed to making a difference in the lives of older people.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <DirectorProfile />
                </div>
            </section>

            {/* Team Members Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    {loading ? (
                        <div className="text-center">Loading...</div>
                    ) : (
                        <div>
                            <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Team Members</h2>
                            {team.map((member) => (
                                <TeamMemberCard
                                    key={member.id}
                                    image={member.image}
                                    name={member.name}
                                    position={member.position}
                                    bio={member.bio}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default OurTeamPage;