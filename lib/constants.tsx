import DateInput from "@/app/components/formInputs/dateInput";
import DropdownInput from "@/app/components/formInputs/dropdownInput";
import MyInput from "@/app/components/formInputs/myInput";
import {
  CalendarOutlined,
  DollarOutlined,
  InboxOutlined,
  LinkOutlined,
  LoginOutlined,
  QrcodeOutlined,
  SettingOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

export const NAVDATA = [
  {
    text: "Dashboard",
    icon: <QrcodeOutlined />,
  },
  {
    text: "All Employees",
    icon: <TeamOutlined />,
  },
  {
    text: "All Departments",
    icon: <UsergroupAddOutlined />,
  },
  {
    text: "Payroll",
    icon: <DollarOutlined />,
  },
  {
    text: "Leaves",
    icon: <CalendarOutlined />,
  },
  {
    text: "Jobs",
    icon: <InboxOutlined />,
    // <ShoppingOutlined />
  },
  {
    text: "Candidates",
    icon: <TeamOutlined />,
  },
  {
    text: "Settings",
    icon: <SettingOutlined />,
  },
  {
    text: "Logout",
    icon: <LoginOutlined />,
  },
];

export const STEP_ONE_DATA = [
  [
    // Row 1
    <MyInput placeholder="Mohamed" label="First Name" id="firstName" key={1} />,
    <MyInput placeholder="Ali" label="Middle Name" id="middleName" key={2} />,
    <MyInput placeholder="Ali" label="Last Name" id="lastName" key={3} />,
  ],
  [
    // Row 2
    <MyInput placeholder="Male" label="Gender" id="Gender" key={4} />,
    <MyInput placeholder="40" label="Age" id="Age" type="number" key={5} />,
    <DateInput
      placeholder="31 Nov, 2024"
      label="Date of Birth"
      id="DOB"
      key={6}
    />,
  ],
  [
    // Row 3
    <MyInput
      placeholder="Egyptian"
      label="Nationality"
      id="nationality"
      key={7}
    />,
    <MyInput
      placeholder="20320231032145"
      label="National Id"
      id="nationalId"
      key={8}
    />,
    <MyInput
      placeholder="Attach"
      label="National Id Attachment"
      id="nationalIdAttachment"
      suffixIcon={<LinkOutlined />}
      key={9}
    />,
  ],
  [
    // Row 4
    <MyInput
      placeholder="Married"
      label="Military Status"
      id="militaryStatus"
      key={10}
    />,
    <MyInput
      placeholder="Married"
      label="Martial Status"
      id="martialStatus"
      key={11}
    />,
    <MyInput placeholder="Cairo" label="City" id="city" key={12} />,
  ],
  [
    // Row 5
    <MyInput placeholder="Cairo, Egypt" label="Adress" id="adress" key={13} />,
    <MyInput placeholder="234 657 984" label="Email" id="email" key={14} />,
    <MyInput
      placeholder="(+20) 1232365632"
      label="Phone Number 1"
      id="PhoneNumberOne"
      type="number"
      key={15}
    />,
  ],
  [
    // Row 6
    <MyInput
      placeholder="(+20) 1232365632"
      label="Phone Number 2"
      id="PhoneNumberTwo"
      type="number"
      key={16}
    />,
    <MyInput
      placeholder="234 657 984"
      label="Social Insurane Number"
      id="socialInsuraneNumber"
      type="number"
      key={17}
    />,
  ],
];

export const STEP_TWO_DATA = [
  [
    // Row 1
    <MyInput
      key={1}
      label="Department Name"
      placeholder="Social Media"
      id="departmentName"
    />,
    <MyInput key={2} label="Job Title" placeholder="Manager" id="jobTitle" />,
    <MyInput
      key={3}
      label="Contract Duration"
      placeholder="Ali"
      id="contractDuration"
    />,
  ],
  [
    // Row 2
    <DateInput
      key={4}
      label="Contract Start Date"
      placeholder="31 Nov, 2024"
      id="contractStartDate"
    />,
    <DateInput
      key={5}
      label="Contract End Date"
      placeholder="31 Nov, 2024"
      id="contractEndDate"
    />,
    <MyInput
      key={6}
      label="Contract Attachment"
      placeholder="Attach"
      id="contractAttachment"
      suffixIcon={<LinkOutlined />}
    />,
  ],
  [
    // Row 3
    <DropdownInput
      key={7}
      id="workLocation"
      label="Work Location"
      placeholder="Select"
      options={[
        { value: "WFH", label: "WFH" },
        { value: "WFO", label: "WFO" },
        { value: "Hybrid", label: "Hybrid" },
      ]}
    />,
    <DropdownInput
      key={8}
      id="workType"
      label="Work Type"
      placeholder="Select"
      options={[
        { value: "Full Time", label: "Full Time" },
        { value: "Part Time", label: "Part Time" },
        { value: "Rotational Shifts", label: "Rotational Shifts" },
      ]}
    />,
  ],
];

export const STEP_THREE_DATA = [
  [
    // Row 1
    <MyInput
      key={1}
      label="Degree Type"
      placeholder="Bachelor's"
      id="degreeType"
    />,
    <MyInput
      key={2}
      label="Field of Study"
      placeholder="Science"
      id="fieldofStudy"
    />,
    <MyInput
      key={3}
      label="Institution Name"
      placeholder="Attach"
      id="institutionName"
    />,
  ],
  [
    // Row 2
    <MyInput
      key={4}
      label="Location of Institution"
      placeholder="Cairo"
      id="locationofInstitution"
    />,
    <MyInput
      key={5}
      label="Graduation Year"
      placeholder="2024"
      type="number"
      id="graduationYear"
    />,
    <MyInput
      key={6}
      label="Grade/GPA"
      placeholder="3.5"
      type="number"
      id="Grade/GPA"
    />,
  ],
  [
    // Row 3
    <DateInput
      key={7}
      label="Start Date"
      placeholder="31 Nov, 2024"
      id="startDate"
    />,
    <DateInput
      key={8}
      label="End Date"
      placeholder="31 Nov, 2024"
      id="endDate"
    />,
  ],
];

export const STEP_THREE_DATA_CONT = [
  [
    // Row 1
    <MyInput
      key={1}
      label="Certification Name"
      placeholder="23555"
      id="certificationName"
    />,
    <MyInput
      key={2}
      label="Issuing Organization"
      placeholder="10"
      id="issuingOrganization"
    />,
    <DateInput
      key={3}
      label="Completion Date"
      placeholder="31 Nov, 2024"
      id="completionDate"
    />,
  ],
  [
    // Row 2
    <MyInput
      key={4}
      label="Certification Attachment"
      placeholder="Attach"
      id="certificationAttachment"
      suffixIcon={<LinkOutlined />}
    />,
    <MyInput
      key={5}
      label="English Proficiency"
      placeholder="Fluent"
      id="englishProficiency"
    />,
  ],
];

export const STEP_FOUR_DATA = [
  [
    // Row 1
    <MyInput key={1} label="Bank Name" placeholder="Attach" id="bankName" />,
    <MyInput
      key={2}
      label="Branch Name"
      placeholder="Attach"
      id="branchName"
    />,
    <MyInput
      key={3}
      label="Account Holder's Name"
      placeholder="2024"
      id="accountHolderName"
    />,
  ],
  [
    // Row 2
    <MyInput
      key={4}
      label="Account Number"
      placeholder="Cairo"
      id="accountNumber"
    />,
  ],
];

export const STEP_FOUR_DATA_CONT = [
  [
    // Row 1
    <DropdownInput
      key={1}
      id="paymentFrequency"
      label="Payment Frequency"
      placeholder="Monthly"
      options={[
        { value: "WFH", label: "WFH" },
        { value: "WFO", label: "WFO" },
        { value: "Hybrid", label: "Hybrid" },
      ]}
    />,
    <MyInput
      key={2}
      label="Insurance Deductions Amount (%)"
      placeholder="10"
      type="number"
      id="insuranceDeductionsAmount"
    />,
    <MyInput
      key={3}
      label="Tax Deductions Amount (%)"
      placeholder="10"
      type="number"
      id="taxDeductionsAmount"
    />,
  ],
  [
    // Row 2
    <DropdownInput
      key={1}
      id="insuranceDeductions"
      label="Insurance Deductions Type"
      placeholder="Health"
      options={[
        { value: "WFH", label: "WFH" },
        { value: "WFO", label: "WFO" },
        { value: "Hybrid", label: "Hybrid" },
      ]}
    />,
  ],
];

// 17
// 10
// 13
// 8
