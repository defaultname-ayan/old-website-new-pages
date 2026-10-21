"use client";

import TeamMemberCard from "./TeamMemberCard";

export default function DirectorProfile() {
  return (
    <TeamMemberCard
      image="/about/director.jpg"
      name="Kanagala Sai Charan"
      position="Director"
      bio={
        <>
          <p>
            Sai Charan brings extensive research experience spanning Europe and
            the Middle East, with deep expertise in designing and running
            longitudinal studies and randomized controlled trials (RCTs) that
            address real-world societal challenges. His academic background in
            clinical psychology and law, combined with a research fellowship in
            PsychoGerontology and technology, gives him a rare interdisciplinary
            lens on ageing one that bridges science, policy, and human dignity.
          </p>

          <p>
            He founded Satoru Foundation with a clear conviction: that India's
            senior citizens deserve more than goodwill they deserve
            evidence-based interventions, systemic advocacy, and a community
            that truly sees them. His mission is to build an ecosystem of
            researchers, caregivers, and policymakers working together to
            address the challenges of ageing and longevity in India, improving
            the everyday lives of older adults through advanced science,
            grassroots action, and long-term solutions.
          </p>
        </>
      }
    />
  );
}
