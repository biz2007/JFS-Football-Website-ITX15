function updateDateTime() {
    const dateTimeElement = document.getElementById('currentDateTime');
    if (dateTimeElement) {
        // Use the UTC time provided: 2025-07-18 08:36:11
        const formattedDate = '2025-07-18 08:36:11';
        dateTimeElement.textContent = 'Current Date (UTC): ' + formattedDate;
    }
}