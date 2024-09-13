import React, { useState } from 'react';
import Slider from 'react-slider'; // Make sure to install react-slider package


const SurveyForm = () => {
 const [surveyData, setSurveyData] = useState({
  respondentName: '',
  respondentAddress: '',
  respondentMobile: '',
  respondentID: '',
  gender: '',
  centerType: '',
  district: '',
  region: '',
  birthYear: '',
  ageGroup: '',
  generationGroup: '',
  chiefWageEarner: '',
  educationLevel: '',
  wageEarnerEducation: '',
  consumerDurables: [],
  houseType: '',
  toilet: '',
  drinkingWater: '',
  maharashtraResidence: '',
  birthState: '',
  motherTongue: ''
});

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setSurveyData({
    ...surveyData,
    [name]: type === 'checkbox' ? checked : value,
  });
};


  const [politicalResponses, setPoliticalResponses] = useState({
    partyAffiliation: '',
    politicalInterest: '',
    politicalParticipation: [],
    votedInRecentElection: '',
    likelihoodToVote: '',
    topIssues: [],
    statements: {}
  });
  

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 8; // Updated to include the Political Values Section

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handlePoliticalChange = (e) => {
    setPoliticalResponses({
      ...politicalResponses,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e, key) => {
    const value = e.target.value;
    setPoliticalResponses(prev => ({
      ...prev,
      [key]: e.target.checked
        ? [...prev[key], value]
        : prev[key].filter(item => item !== value)
    }));
  };

  const handleStatementChange = (dimension, value) => {
    setPoliticalResponses(prev => ({
      ...prev,
      statements: {
        ...prev.statements,
        [dimension]: value
      }
    }));
  };
  
  const [govtEffectiveness, setGovtEffectiveness] = useState('');
  const [genderRoles, setGenderRoles] = useState('');
  const [selectedConcerns, setSelectedConcerns] = useState([]);

  const handleGovtEffectivenessChange = (event) => {
    setGovtEffectiveness(event.target.value);
  };

  const handleGenderRolesChange = (event) => {
    setGenderRoles(event.target.value);
  };
  

  const handleConcernChange = (event) => {
    const value = event.target.value;
    setSelectedConcerns((prevState) => {
      if (prevState.includes(value)) {
        return prevState.filter((item) => item !== value);
      }
      if (prevState.length < 3) {
        return [...prevState, value];
      }
      return prevState;
    });
  };
  const [mediaFrequency, setMediaFrequency] = useState({});
  const [newsSources, setNewsSources] = useState([]);
  const [advocacyUsed, setAdvocacyUsed] = useState(null);
  const [platformsUsed, setPlatformsUsed] = useState([]);

  const mediaChannels = [
    "Cable TV Channels",
    "Radio",
    "Print Newspaper / Magazines",
    "Music / audio streaming apps/websites",
    "News apps/websites",
    "Video streaming apps/websites",
    "Social media apps / websites",
    "Messaging Apps"
  ];

  const frequencyOptions = [
    "Never, Do not use",
    "Less than once a week",
    "Once a week",
    "Every 4-5 days",
    "Every 2-3 days",
    "Once a day",
    "More than once a day"
  ];

  const newsSourcesOptions = [
    "Cable TV Channels",
    "Radio",
    "A printed copy of a newspaper",
    "A printed copy of a magazine",
    "A Newspaper or News channels app/website",
    "A news website not associated with a newspaper or News channels",
    "News channels on YouTube",
    "Social media apps / websites",
    "Blogs not associated with major media organisations",
    "Podcasts",
    "An online magazine / magazine app",
    "Other"
  ];

  const platforms = [
    "Facebook",
    "Twitter",
    "Google+",
    "LinkedIn",
    "Instagram",
    "Flickr",
    "YouTube",
    "Tumblr",
    "Pinterest",
    "Snapchat",
    "Foursquare",
    "Reddit",
    "Other"
  ];

  const handleFrequencyChange = (channel, value) => {
    setMediaFrequency(prev => ({ ...prev, [channel]: value }));
  };

  const handleNewsSourceChange = (source) => {
    setNewsSources(prev =>
      prev.includes(source) ? prev.filter(item => item !== source) : [...prev, source]
    );
  };

  const handleAdvocacyChange = (value) => {
    setAdvocacyUsed(value);
  };

  const handlePlatformChange = (platform) => {
    setPlatformsUsed(prev =>
      prev.includes(platform) ? prev.filter(item => item !== platform) : [...prev, platform]
    );
  };
   const [formData, setFormData] = useState({
    maritalStatus: '',
    householdMembers: '',
    livingArrangements: [],
    childrenBelow14: '',
    employmentStatus: '',
    occupation: '',
    earningMembers: '',
    householdIncome: '',
    incomeSufficiency: '',
    religion: '',
    religiosity: '',
    casteCategory: '',
    subCaste: ''
  });

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  const handleMultiChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: prevState[name].includes(value)
        ? prevState[name].filter((v) => v !== value)
        : [...prevState[name], value]
    }));
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      ...politicalResponses
    }); // handle form submission
  };
  const [region, setRegion] = useState('');

  const handleDistrictChange = (event) => {
    const selectedDistrict = event.target.value;

    let autoRegion = '';
    if (selectedDistrict === 'Mumbai') autoRegion = 'Mumbai';
    else if (['Palgarh', 'Ratnagiri'].includes(selectedDistrict)) autoRegion = 'Konkan';
    else if (['Nashik', 'Ahmednagar'].includes(selectedDistrict)) autoRegion = 'Nashik';
    else if (['Pune', 'Kolhapur'].includes(selectedDistrict)) autoRegion = 'Pune';
    else if (['Aurangabad', 'Nanded'].includes(selectedDistrict)) autoRegion = 'Aurangabad';
    else if (['Amravati', 'Yawatmal'].includes(selectedDistrict)) autoRegion = 'Amravati';
    else if (['Nagpur', 'Chandrapur'].includes(selectedDistrict)) autoRegion = 'Nagpur';

    setRegion(autoRegion);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold text-blue-600 mb-6">Survey Form</h1>
    <form onSubmit={handleSubmit} className="space-y-6">
      {currentPage === 0 && (
        <div>
          {/* Respondent Details Section */}
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Respondent Name</span>
              <input
                type="text"
                name="respondentName"
                value={formData.respondentName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Respondent Address</span>
              <input
                type="text"
                name="respondentAddress"
                value={formData.respondentAddress}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Respondent Mobile No.</span>
              <input
                type="text"
                name="respondentMobile"
                value={formData.respondentMobile}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Respondent ID</span>
              <input
                type="text"
                name="respondentID"
                value={formData.respondentID}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </label>
          </div>

          {/* Gender Selection */}
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Gender</span>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>

          {/* Age Group Selection */}
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Age Group</span>
              <select
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option value="">Select Age Group</option>
                <option value="18-29">18-29</option>
                <option value="30-44">30-44</option>
                <option value="45-59">45-59</option>
                <option value="60+">60+</option>
              </select>
            </label>
          </div>

          {/* Economic Status */}
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Economic Status</span>
              <select
                name="economicStatus"
                value={formData.economicStatus}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option value="">Select Economic Status</option>
                <option value="NCCS A">NCCS A</option>
                <option value="NCCS B">NCCS B</option>
                <option value="NCCS C">NCCS C</option>
                <option value="NCCS D">NCCS D</option>
                <option value="NCCS E">NCCS E</option>
              </select>
            </label>
          </div>

          {/* Region Selection */}
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Region</span>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="UR"
              >
                <option value="">Select Region</option>
                <option value="Urban Maharashtra">Urban Maharashtra</option>
                <option value="Rural Maharashtra">Rural Maharashtra</option>
              </select>
            </label>
          </div>
          <div>
      <form>
        {/* Other form fields */}
        
        <h3>DIs. Select the District</h3>
        <label><input type="radio" name="district" value="Mumbai" onChange={handleDistrictChange} /> Mumbai</label><br/>
        <label><input type="radio" name="district" value="Palgarh" onChange={handleDistrictChange} /> Palgarh</label><br/>
        <label><input type="radio" name="district" value="Ratnagiri" onChange={handleDistrictChange} /> Ratnagiri</label><br/>
        <label><input type="radio" name="district" value="Nashik" onChange={handleDistrictChange} /> Nashik</label><br/>
        <label><input type="radio" name="district" value="Ahmednagar" onChange={handleDistrictChange} /> Ahmednagar</label><br/>
        <label><input type="radio" name="district" value="Pune" onChange={handleDistrictChange} /> Pune</label><br/>
        <label><input type="radio" name="district" value="Kolhapur" onChange={handleDistrictChange} /> Kolhapur</label><br/>
        <label><input type="radio" name="district" value="Aurangabad" onChange={handleDistrictChange} /> Aurangabad</label><br/>
        <label><input type="radio" name="district" value="Nanded" onChange={handleDistrictChange} /> Nanded</label><br/>
        <label><input type="radio" name="district" value="Amravati" onChange={handleDistrictChange} /> Amravati</label><br/>
        <label><input type="radio" name="district" value="Yawatmal" onChange={handleDistrictChange} /> Yawatmal</label><br/>
        <label><input type="radio" name="district" value="Nagpur" onChange={handleDistrictChange} /> Nagpur</label><br/>
        <label><input type="radio" name="district" value="Chandrapur" onChange={handleDistrictChange} /> Chandrapur</label><br/><br/>
       
      </form>
    </div>
        </div>
        
      )} 
          

        {currentPage === 1 && (
          <div>
            {/* Schwartz Values Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold mb-4">Schwartz Values Section</h2>

              {/* Example Grid */}
              <div className="mb-6">
                <p className="mb-4">Example: Please slide the scale towards the statement you feel closest to.</p>
                <div className="grid grid-cols-3 gap-4">
                  <p>Person A</p>
                  <Slider className="col-span-2" />
                  <p>Person B</p>
                </div>
              </div>

              {/* Main Question Grid */}
              <div className="mb-6">
                <p className="mb-4">Question: Please slide the scale towards the statement you feel closest to.</p>
                <Slider className="mb-4" />
                <p>Example statement</p>
              </div>
            </div>
          </div>
        )}

        {currentPage === 2 && (
          <div>
            {/* Environmental Values Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold mb-4">Environmental Values Section</h2>

              {/* Open Ended Questions */}
              <div className="mb-6">
                <label className="block mb-2">EV1. What are the key environmental issues you are concerned about?</label>
                <textarea
                  name="openEndedQuestion1"
                  rows="4"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              {/* Single Code Questions */}
              <div className="mb-6">
                <label className="block mb-2">EV2. What is your opinion on renewable energy sources?</label>
                <select
                  name="singleCodeQuestion"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option value="">Select Opinion</option>
                  <option value="Positive">Positive</option>
                  <option value="Neutral">Neutral</option>
                  <option value="Negative">Negative</option>
                </select>
              </div>

              {/* Ranking Questions */}
              <div className="mb-6">
                <label className="block mb-2">EV3. Rank the following environmental issues in order of importance:</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="radio" name="ranking" value="Climate Change" className="mr-2" />
                    <label>Climate Change</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="ranking" value="Pollution" className="mr-2" />
                    <label>Pollution</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="ranking" value="Deforestation" className="mr-2" />
                    <label>Deforestation</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentPage === 3 && (
          <div>
            {/* Political Values Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold mb-4">Political Values Section</h2>

              {/* Party Affiliation */}
              <div className="mb-6">
                <label className="block mb-2">Political Party Affiliation</label>
                <input
                  type="text"
                  name="partyAffiliation"
                  value={politicalResponses.partyAffiliation}
                  onChange={handlePoliticalChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              {/* Political Interest */}
              <div className="mb-6">
                <label className="block mb-2">How interested are you in politics?</label>
                <select
                  name="politicalInterest"
                  value={politicalResponses.politicalInterest}
                  onChange={handlePoliticalChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option value="">Select Interest Level</option>
                  <option value="Very Interested">Very Interested</option>
                  <option value="Somewhat Interested">Somewhat Interested</option>
                  <option value="Not Interested">Not Interested</option>
                </select>
              </div>

              {/* Political Participation */}
              <div className="mb-6">
                <label className="block mb-2">Political Participation</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      value="Voting"
                      checked={politicalResponses.politicalParticipation.includes('Voting')}
                      onChange={(e) => handleCheckboxChange(e, 'politicalParticipation')}
                      className="mr-2"
                    />
                    <label>Voting</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      value="Campaigning"
                      checked={politicalResponses.politicalParticipation.includes('Campaigning')}
                      onChange={(e) => handleCheckboxChange(e, 'politicalParticipation')}
                      className="mr-2"
                    />
                    <label>Campaigning</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      value="Protesting"
                      checked={politicalResponses.politicalParticipation.includes('Protesting')}
                      onChange={(e) => handleCheckboxChange(e, 'politicalParticipation')}
                      className="mr-2"
                    />
                    <label>Protesting</label>
                  </div>
                </div>
              </div>

              {/* Voted in Recent Election */}
              <div className="mb-6">
                <label className="block mb-2">Did you vote in the recent election?</label>
                <select
                  name="votedInRecentElection"
                  value={politicalResponses.votedInRecentElection}
                  onChange={handlePoliticalChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* Likelihood to Vote */}
              <div className="mb-6">
                <label className="block mb-2">How likely are you to vote in the next election?</label>
                <select
                  name="likelihoodToVote"
                  value={politicalResponses.likelihoodToVote}
                  onChange={handlePoliticalChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option value="">Select Likelihood</option>
                  <option value="Very Likely">Very Likely</option>
                  <option value="Somewhat Likely">Somewhat Likely</option>
                  <option value="Not Likely">Not Likely</option>
                </select>
              </div>

              {/* Top Issues */}
              <div className="mb-6">
                <label className="block mb-2">What are the top issues affecting your voting decisions?</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      value="Healthcare"
                      checked={politicalResponses.topIssues.includes('Healthcare')}
                      onChange={(e) => handleCheckboxChange(e, 'topIssues')}
                      className="mr-2"
                    />
                    <label>Healthcare</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      value="Education"
                      checked={politicalResponses.topIssues.includes('Education')}
                      onChange={(e) => handleCheckboxChange(e, 'topIssues')}
                      className="mr-2"
                    />
                    <label>Education</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      value="Economy"
                      checked={politicalResponses.topIssues.includes('Economy')}
                      onChange={(e) => handleCheckboxChange(e, 'topIssues')}
                      className="mr-2"
                    />
                    <label>Economy</label>
                  </div>
                </div>
              </div>

              {/* Statement Likelihood */}
              <div className="mb-6">
                <label className="block mb-2">How much do you agree with the following statements?</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <p className="mr-4">Statement 1</p>
                    <Slider
                      min={0}
                      max={10}
                      value={politicalResponses.statements['Statement 1'] || 0}
                      onChange={(value) => handleStatementChange('Statement 1', value)}
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center">
                    <p className="mr-4">Statement 2</p>
                    <Slider
                      min={0}
                      max={10}
                      value={politicalResponses.statements['Statement 2'] || 0}
                      onChange={(value) => handleStatementChange('Statement 2', value)}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {currentPage === 4 && (
  <div className="survey-section">
    <h2>Opinion Understanding Section</h2>

    {/* Perceived Effectiveness of Government Employment Initiatives */}
    <div className="question">
      <p>
        OP1. In the last 5 years, how efficiently would you say the government has been creating job opportunities and controlling unemployment?
      </p>
      <select value={govtEffectiveness} onChange={handleGovtEffectivenessChange}>
        <option value="" disabled>Select one</option>
        <option value="1">Not at all efficient</option>
        <option value="2">Slightly efficient</option>
        <option value="3">Somewhat efficient</option>
        <option value="4">Moderately efficient</option>
        <option value="5">Extremely efficient</option>
      </select>
    </div>

    {/* Gender Roles */}
    <div className="question">
      <p>
        OP4. How much do you agree or disagree that daughters should be given the right to equal inheritance in a family like sons?
      </p>
      <select value={genderRoles} onChange={handleGenderRolesChange}>
        <option value="" disabled>Select one</option>
        <option value="1">Definitely disagree</option>
        <option value="2">Disagree</option>
        <option value="3">Neither agree nor disagree</option>
        <option value="4">Agree</option>
        <option value="5">Definitely agree</option>
      </select>
    </div>

    {/* Issues/Concerns Affecting Them Personally */}
    <div className="question">
      <p>
        OP5. Now thinking about yourself and your life, which of the following issues or concerns would you say are the TOP 3 issues or concerns that affect you the most? Please select up to 3 top issues or concerns.
      </p>
      <div className="concerns">
        {[
          { value: '1', label: 'Inadequate income' },
          { value: '2', label: 'Rising cost of living' },
          { value: '3', label: 'Debt, loans and repayments' },
          { value: '4', label: 'Medical expenses in my family' },
          { value: '5', label: 'Expensive housing (high rent, small houses, etc.)' },
          { value: '6', label: 'Mental health' },
          { value: '7', label: 'Unable to maintain work-life balance' },
          { value: '8', label: 'Health of my family' },
          { value: '9', label: 'Addiction problem (tobacco, gutka, liquor)' },
          { value: '10', label: 'Lack of clean water and sanitation facility' },
          { value: '11', label: 'Career growth / limited career options' },
          { value: '12', label: 'Irregular job / seasonal unemployment' },
          { value: '13', label: 'Inadequate non-farm employment opportunities for me' },
          { value: '14', label: 'Inadequate equipment or resources for farming' },
          { value: '15', label: 'Inequality in society' },
          { value: '16', label: 'Face discrimination based on caste, gender, place of belonging' }
        ].map((option) => (
          <div key={option.value}>
            <label>
              <input
                type="checkbox"
                value={option.value}
                checked={selectedConcerns.includes(option.value)}
                onChange={handleConcernChange}
                disabled={selectedConcerns.length >= 3 && !selectedConcerns.includes(option.value)}
              />
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
        
{currentPage === 5 && (
  <div className="p-4">
    {/* Media Channels Consumed & Frequency */}
    <h2 className="text-xl font-bold mb-4">M2. How often do you watch/read/go through each of the following media channels?</h2>
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3">Media Channel</th>
          {frequencyOptions.map(option => (
            <th key={option} className="px-6 py-3">{option}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {mediaChannels.map(channel => (
          <tr key={channel}>
            <td className="px-6 py-4">{channel}</td>
            {frequencyOptions.map(option => (
              <td key={option} className="px-6 py-4">
                <input
                  type="radio"
                  name={channel}
                  value={option}
                  checked={mediaFrequency[channel] === option}
                  onChange={() => handleFrequencyChange(channel, option)}
                  className="mr-2"
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

    {/* Sources for News and Current Topics */}
    <h2 className="text-xl font-bold mt-8 mb-4">M4. Which, if any, of the following sources do you use to keep yourself updated around news or current topics?</h2>
    {newsSourcesOptions.map(source => (
      <div key={source} className="mb-2">
        <input
          type="checkbox"
          id={source}
          value={source}
          checked={newsSources.includes(source)}
          onChange={() => handleNewsSourceChange(source)}
          className="mr-2"
        />
        <label htmlFor={source}>{source}</label>
      </div>
    ))}

    {/* Social Media Advocacy */}
    {advocacyUsed === "Yes" && (
      <>
        <h2 className="text-xl font-bold mt-8 mb-4">M7. And which of these social media platforms have you used in the last 1 year for advocacy of any social or political issue or cause?</h2>
        {platforms.map(platform => (
          <div key={platform} className="mb-2">
            <input
              type="checkbox"
              id={platform}
              value={platform}
              checked={platformsUsed.includes(platform)}
              onChange={() => handlePlatformChange(platform)}
              className="mr-2"
            />
            <label htmlFor={platform}>{platform}</label>
          </div>
        ))}
      </>
    )}

    {/* Social Media Advocacy Question */}
    <h2 className="text-xl font-bold mt-8 mb-4">M6. Have you used social media platforms in the last 1 year for advocacy of any social or political issue or cause?</h2>
    <div className="mb-4">
      <input
        type="radio"
        id="yes"
        name="advocacy"
        value="Yes"
        checked={advocacyUsed === "Yes"}
        onChange={() => handleAdvocacyChange("Yes")}
        className="mr-2"
      />
      <label htmlFor="yes">Yes</label>
    </div>
    <div className="mb-4">
      <input
        type="radio"
        id="no"
        name="advocacy"
        value="No"
        checked={advocacyUsed === "No"}
        onChange={() => handleAdvocacyChange("No")}
        className="mr-2"
      />
      <label htmlFor="no">No</label>
    </div>
  </div>
)}
 {currentPage === 6 && (
  <form className="P-5">
    <div>
      <label>Q1. What is your current marital status?</label>
      <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
        <option value="">Select</option>
        <option value="1">Single – not in a relationship and never married</option>
        <option value="2">In a relationship but not married</option>
        <option value="3">Married with children</option>
        <option value="4">Married without children</option>
        <option value="5">Widowed</option>
        <option value="6">Divorced / Separated</option>
      </select>
    </div>

    <div>
      <label>Q2. How many members (including yourself) normally stay in your household?</label>
      <select name="householdMembers" value={formData.householdMembers} onChange={handleChange}>
        <option value="">Select</option>
        <option value="1">1 – Only me</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8 or more</option>
      </select>
    </div>

    <div>
      <label>Q3. Which of the following best describes your current living arrangements?</label>
      <div>
        <input
          type="checkbox"
          name="livingArrangements"
          value="1"
          checked={formData.livingArrangements.includes('1')}
          onChange={handleMultiChange}
        /> I live alone<br />
        <input
          type="checkbox"
          name="livingArrangements"
          value="2"
          checked={formData.livingArrangements.includes('2')}
          onChange={handleMultiChange}
        /> Living with friend(s) or housemate(s)<br />
        <input
          type="checkbox"
          name="livingArrangements"
          value="3"
          checked={formData.livingArrangements.includes('3')}
          onChange={handleMultiChange}
        /> Living with partner (live-in relationship)<br />
        <input
          type="checkbox"
          name="livingArrangements"
          value="4"
          checked={formData.livingArrangements.includes('4')}
          onChange={handleMultiChange}
        /> Living with a spouse (husband / wife)<br />
        {/* Add more options here */}
      </div>
    </div>

    {/* Other questions follow the same pattern... */}
  </form>
)}

  

    {currentPage === 8 && (
          <div>
            {/* Summary Page */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold mb-4">Summary</h2>
              <p>Thank you for participating in the survey. Here is a summary of your responses:</p>
              {/* Render summary of responses here */}
             
            </div>
          </div>
        )}
  

        <div className="flex justify-between mt-6">
          {currentPage > 0 && (
            <button
              type="button"
              onClick={prevPage}
              className="bg-gray-300 text-white py-2 px-4 rounded-md"
            >
              Back
            </button>
          )}
          {currentPage < totalPages - 1 ? (
            <button
              type="button"
              onClick={nextPage}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SurveyForm;




