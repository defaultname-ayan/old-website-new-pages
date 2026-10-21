// English content for the Aatmeeya Sparsha counselling page (/counselling).
// Keep the shape identical to content.te.js.
// TODO before launch: confirm consultation days/timings, full street address,
// concession policy wording, and clinician names/RCI numbers.

const en = {
  lang: "en",
  path: "/counselling",
  meta: {
    title: "Geriatric Counselling for Seniors in Hyderabad | Aatmeeya Sparsha, Satoru Foundation",
    description:
      "Counselling for older adults, people living with dementia and their caregivers in Hyderabad. Elder mental health support for depression, anxiety, grief and caregiver burnout. Sessions in Telugu, English and Hindi, in person at Punjagutta or online.",
    ogLocale: "en_IN",
  },
  switchLabel: "Language",
  nav: [
    { id: "who", label: "Who it is for" },
    { id: "help", label: "What we help with" },
    { id: "approach", label: "Our approach" },
    { id: "how", label: "How it works" },
    { id: "book", label: "Book" },
  ],
  hero: {
    eyebrow: "Satoru Foundation · Geriatric Counselling Centre",
    name: "Aatmeeya Sparsha",
    altName: "ఆత్మీయ స్పర్శ",
    altLang: "te",
    subtitle: "Counselling for seniors in Hyderabad",
    lede: "Counselling and psychosocial support for older adults, for people living with dementia and other neurodegenerative conditions, and for the families and caregivers who look after them.",
    tags: ["Telugu · English · Hindi", "In person in Hyderabad", "Online sessions", "Subsidised, not-for-profit"],
    call: "Call +91 99594 70022",
    email: "Email us",
  },
  who: {
    label: "Who it is for",
    title: "Three groups of people, one centre",
    intro:
      "Ageing rarely brings one difficulty at a time. Aatmeeya Sparsha is built around the three groups who most often need support together: the older person, the person living with a memory condition, and the person doing the caring.",
    cards: [
      {
        icon: "elder",
        title: "Older adults",
        text: "Anxiety, late-life depression, sleep difficulty, grief and bereavement, loneliness, retirement and role change, adjustment to illness or dependency, elder abuse and neglect, and distress around serious or terminal illness.",
      },
      {
        icon: "memory",
        title: "Memory and dementia",
        text: "Support for people living with dementia and other neurodegenerative conditions: counselling after a diagnosis, help with mood and adjustment, structured activity sessions that keep the person engaged and involved, and work with the family around changing roles and decisions. We do not diagnose dementia. Diagnosis is made by a neurologist or psychiatrist, and we will help you find one. Our work is the support that comes before and after that appointment.",
      },
      {
        icon: "carer",
        title: "Caregivers",
        text: "For family carers and professional caregivers: exhaustion and burnout, guilt and resentment, sibling and family conflict, setting boundaries, grief while the person is still living, and caregiver support groups.",
      },
    ],
  },
  help: {
    label: "What we help with",
    title: "Common reasons people come to us",
    intro:
      "You do not need a diagnosis, a referral, or the right words for what is happening. If something about ageing, memory, or caregiving has become hard to carry, that is reason enough.",
    items: [
      "Late-life depression",
      "Anxiety and worry",
      "Memory concerns",
      "Life after a dementia diagnosis",
      "Caregiver burnout",
      "Grief and bereavement",
      "Loneliness and isolation",
      "Retirement and loss of role",
      "Adjustment to illness or disability",
      "Family and intergenerational conflict",
      "Elder abuse and neglect",
      "Sleep difficulties",
      "Decisions about care and living arrangements",
      "Serious and terminal illness",
      "End-of-life concerns",
    ],
  },
  approach: {
    label: "Our approach",
    title: "Therapies adapted for later life",
    intro:
      "Much of mainstream counselling is designed for younger adults and simply handed to older people unchanged. We work the other way round: we use approaches with evidence behind them in older populations, adapted for hearing, pace, cognition, and the realities of family life in Indian households.",
    items: [
      {
        title: "Cognitive behavioural therapy, adapted",
        text: "For depression, anxiety and insomnia in later life, with slower pacing, shorter sessions where needed, written summaries, and family involvement when it helps.",
      },
      {
        title: "Reminiscence therapy",
        text: "Structured use of memory, photographs, music and objects to support mood, sense of identity, and conversation, including with people living with dementia.",
      },
      {
        title: "Life review",
        text: "A guided look back across a life, used where there is regret, unfinished business, loss of meaning, or the approach of the end of life.",
      },
      {
        title: "Supportive counselling and grief work",
        text: "For bereavement, loneliness, and the accumulating losses of older age, including anticipatory grief in caregivers.",
      },
      {
        title: "Psychoeducation",
        text: "Plain explanations of dementia, depression, medication, and what to expect, for the older person and the whole family.",
      },
      {
        title: "Caregiver support and skills",
        text: "Individual sessions and facilitated groups: managing behaviour changes, sharing the load, protecting your own health, and planning ahead.",
      },
    ],
  },
  how: {
    label: "How it works",
    title: "Getting started",
    steps: [
      {
        title: "Get in touch",
        text: "Call or email us. Tell us briefly who the support is for: yourself, a parent, or someone you care for professionally.",
      },
      {
        title: "First session",
        text: "A conversation to understand what is happening, with a brief assessment where it is useful. Family members are welcome if the person wants them there.",
      },
      {
        title: "A plan you agree to",
        text: "We tell you what we think would help, how many sessions it is likely to take, and what it will cost, before anything begins.",
      },
      {
        title: "Ongoing sessions",
        text: "In person at our Punjagutta office or online, in Telugu, English or Hindi. Where a medical opinion is needed, we refer or bring in our visiting physician.",
      },
    ],
  },
  fees: {
    label: "Fees",
    title: "Subsidised, and told to you upfront",
    text: "Satoru Foundation is a Section 8 not-for-profit. Counselling at Aatmeeya Sparsha is offered well below private practice rates, with further concessions for those who need them. You will be told the exact fee before your first session, and there are no charges you have not agreed to.",
  },
  team: {
    label: "Who you will see",
    title: "Trained specifically in work with older adults",
    text: "Aatmeeya Sparsha is staffed by a team of psychologists comprising clinical psychologists and counselling psychologists, all trained in work with older adults. A visiting physician advises on medical questions. Supervised trainees assist with follow-up contact only, never as the therapist. All clinical work is supervised, documented, and guided by current evidence.",
  },
  // Part 2 sections: shown in this order after "Who you will see", before booking.
  // Review note: have the advocate check `privacy` against the Schedule 4 DPDP notice
  // drafted for the college MoU, so the two documents say the same thing.
  privacy: {
    title: "What you tell us stays here",
    paragraphs: [
      "What you say in a session is confidential. We keep brief clinical records so that your care is consistent, stored securely and seen only by the clinicians involved in your care.",
      "There are three situations where we may need to share information: when you ask us to; when someone is at serious risk of harm; and when a court or the law requires it. We will tell you if this happens, unless telling you would increase the risk to someone.",
      "We do not sell, trade or share your information for any other purpose. You may ask us what we hold about you, and ask us to correct it.",
    ],
  },
  eligibility: {
    title: "Who can come to us",
    paragraphs: [
      "Aatmeeya Sparsha is for adults aged 50 and above. It is also for family members and professional caregivers aged 35 and above who are looking after an older person. If you are unsure whether you qualify, call us and ask. We would rather have the conversation than turn someone away by rule.",
    ],
  },
  limits: {
    title: "What we do not do",
    items: [
      "We do not prescribe or change medication. Our visiting physician can advise, and we refer to psychiatrists and neurologists where that is what is needed.",
      "We do not diagnose dementia or any other condition.",
      "We are not an emergency or crisis service.",
      "We do not provide nursing, attendant or home-care staff. For that, our Saanidhyam directory lists verified providers.",
    ],
    directoryLink: { text: "Saanidhyam directory", href: "/saanidhyam" },
  },
  // DO NOT PUBLISH YET: needs a matching internal protocol first (who assesses risk,
  // who decides to escalate, where it is recorded). Set publish: true once it exists.
  harm: {
    publish: false,
    title: "If an older person is being harmed",
    paragraphs: [
      "If you tell us that an older person is being hit, threatened, neglected, financially exploited or abandoned, we will take it seriously and talk it through with you before anything is done. Nothing is reported without discussing it with you first, unless the person is in immediate danger.",
      "We can explain your options under the Maintenance and Welfare of Parents and Senior Citizens Act, 2007, help you reach the right authority, and keep supporting the older person throughout. You can also call the national elder helpline on 14567.",
    ],
  },
  emergency: {
    title: "If this is an emergency",
    text: "Aatmeeya Sparsha is not an emergency or crisis service. If someone is in immediate danger, or there is a medical emergency, please go to the nearest hospital emergency department or call 108. For urgent mental health support, Tele-MANAS is available free, around the clock, on 14416.",
  },
  book: {
    label: "Book an appointment",
    title: "Talk to us",
    intro:
      "Appointments can be booked by phone or email. If you are enquiring on behalf of a parent or a client, that is completely fine. Most of our first calls come from family members.",
    phoneLabel: "Call or WhatsApp",
    emailLabel: "Email",
    visitLabel: "Visit",
    address: "Satoru Foundation, Punjagutta, Hyderabad, Telangana",
  },
  about: {
    text: "Aatmeeya Sparsha is the geriatric counselling centre of the Satoru Foundation, a Section 8 non-profit working on geriatric care, cognitive wellness, dementia awareness and psychosocial support across Telangana and Andhra Pradesh.",
    legal: "CIN U72200TS2024NPL189603 · Donations are eligible for deduction under Section 80G of the Income Tax Act.",
  },
};

export default en;
