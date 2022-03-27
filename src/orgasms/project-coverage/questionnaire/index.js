import React from "react";
import { QuestionnaireOrganism } from "../..";
export default function Questionnaire() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
      <QuestionnaireOrganism
        number="I"
        question="Main Problem Being Addressed"
        description="Every solution targets a certain problem. Please use this section to highlight the specific problem the solution addresses. This section can be as short or as long as needed to describe the precise problem the solution addresses"
      />
      <QuestionnaireOrganism
        number="IV"
        question="Markets Addressed"
        description="RFI submissions:  If you have market information that is not already described in the RFI and you feel it would build a stronger case for your solution, please provide it in this section.  If you do not have additional information, please feel free to leave this section blank. Open submissions:  Please provide a brief description of all of the potential markets that this solution could address. Reviewers will ask: Why is this solution potentially valuable? Has the inventor considered where it may have an impact in the marketplace or what types of companies want or need this technology?"
      />
      <QuestionnaireOrganism
        number="II"
        question="Summary of the Invention (Maximum of 150 words)"
        description="This is the section reviewers read to understand the technical solution.  Please state the solution clearly. Reviewers will ask: What is the actual technical advancement or improvement provided by this solution?"
      />
      <QuestionnaireOrganism
        number="V"
        question="Comparative Benefits / Advantages"
        description="The section is used to help the reviewers understand how this solution compares to competitors’ methods or products. Reviewers will ask: How is the solution potentially better than what is out there? How is it different from what has been done before (or described in the literature)?"
      />
      <QuestionnaireOrganism
        number="III"
        question="How is This Invention Made and Used"
        description="Please describe in as much detail as possible how the innovation is implemented.  This includes details on how you actually make, assemble, synthesize, or build the solution and details on how the solution is used once it is made. Reviewers will ask: How does the technical innovation actually work – or – what is the detailed process to achieve the technical innovation? Please help convince the reviewers with supporting statements using as much of the following that is available: your thoughts, logic, supporting literature, and/or experiments."
      />
      <QuestionnaireOrganism
        number="VI"
        question="Related Background"
        description="This section is used to highlight information that can be used by the reviewers or patent attorney to help put the solution in proper context.  You can think of this section as something similar to the introduction section of an academic publication.  This section is specifically reserved for other people’s work (please include competitive work) as well as your past work that you believe will aid the reviewers in understanding the technical landscape.  Data related to or supporting your solution should NOT be in this section, it should be in Section III: “How is this Solution Made and Used.”"
      />
      <QuestionnaireOrganism
        number="VII"
        question="References "
        description="Please list each of the documents you referenced in any of the above sections, or any other documents or information that you believe a reviewer or patent attorney would want to know about.  (Please note: this section is not optional. We are required to collect this information for legal reasons to comply with patent rules in some countries in which we file)."
      />
    </div>
  );
}
