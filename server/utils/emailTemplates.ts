export function generateFormSubmissionEmail(formData: any) {
  return {
    subject: 'New NDIS Support Service Enquiry',
    html: `
      <h1>New Form Submission</h1>
      <h2>Getting Started</h2>
      <p><strong>Completing For:</strong> ${formData.getStarted.completingFor}</p>

      <h2>Participant Details</h2>
      <p><strong>Name:</strong> ${formData.participantDetails.firstName} ${formData.participantDetails.lastName}</p>
      <p><strong>Date of Birth:</strong> ${formData.participantDetails.dateOfBirth}</p>
      <p><strong>Gender:</strong> ${formData.participantDetails.gender}</p>
      <p><strong>Address:</strong> ${formData.participantDetails.address}</p>
      <p><strong>Phone:</strong> ${formData.participantDetails.phone}</p>
      <p><strong>Email:</strong> ${formData.participantDetails.email}</p>
      <p><strong>Has Guardian:</strong> ${formData.participantDetails.hasGuardian}</p>

      <h2>Cultural Details</h2>
      <p><strong>Country of Birth:</strong> ${formData.culturalDetails.countryOfBirth}</p>
      <p><strong>Needs Interpreter:</strong> ${formData.culturalDetails.needsInterpreter}</p>
      <p><strong>Cultural Considerations:</strong> ${formData.culturalDetails.culturalConsiderations || 'None'}</p>
      <p><strong>Indigenous Status:</strong> ${formData.culturalDetails.isIndigenous}</p>

      <h2>Service Request</h2>
      <p><strong>Primary Service:</strong> ${formData.serviceRequest.primaryService}</p>
      <p><strong>Secondary Service:</strong> ${formData.serviceRequest.secondaryService || 'None'}</p>
      <p><strong>Additional Service:</strong> ${formData.serviceRequest.additionalService || 'None'}</p>
      <p><strong>Conditions:</strong> ${formData.serviceRequest.conditions}</p>
      <p><strong>Special Assessments:</strong> ${formData.serviceRequest.specialAssessments || 'None'}</p>
      <p><strong>Extra Information:</strong> ${formData.serviceRequest.extraInfo || 'None'}</p>
      <p><strong>Practitioner Notes:</strong> ${formData.serviceRequest.practitionerNotes || 'None'}</p>

      <h2>Booking Details</h2>
      <p><strong>Consultation Types:</strong> ${formData.bookingDetails.consultationTypes.join(', ')}</p>
      <p><strong>Contact Person:</strong> ${formData.bookingDetails.contactPerson}</p>
      <p><strong>Reception Notes:</strong> ${formData.bookingDetails.receptionNotes || 'None'}</p>

      <h2>NDIS Information</h2>
      <p><strong>Plan Type:</strong> ${formData.ndisInfo.planType}</p>
    `,
  };
}
