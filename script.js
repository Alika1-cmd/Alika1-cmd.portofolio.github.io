const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyu_0sOAK0zSbxbWxJdayV8UvCoM7bBDhBqJC8k0BhQ-ylBkR-NoFsoYNWzhqfJQDwi_g/exec';

document.getElementById('attendanceForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const msgEl = document.getElementById('message');
  msgEl.textContent = 'Submitting...';

  const payload = {
    studentId: document.getElementById('studentId').value.trim(),
    name: document.getElementById('name').value.trim(),
    className: document.getElementById('className').value.trim(),
    subject: document.getElementById('subject').value.trim(),
    status: document.getElementById('status').value,
    // date will be captured server-side, but keep a local field if needed:
    submittedAt: new Date().toISOString()
  };

  try {
    const resp = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Apps Script expects this if deployed for "Anyone, even anonymous"
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    // With no-cors we cannot read response; assume success if no exception
    msgEl.textContent = 'Attendance submitted. Thank you!';
    this.reset();
  } catch (err) {
    console.error(err);
    msgEl.textContent = 'Submission failed. Check the script URL and permissions.';
  }
});

document.getElementById('clearBtn').addEventListener('click', function(){
  document.getElementById('attendanceForm').reset();
  document.getElementById('message').textContent = '';
});
