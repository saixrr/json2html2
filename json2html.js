// json2html.js

export default function json2html(data) {
  // Start the HTML table with a custom attribute
  let html = '<table data-user="kovithkovi123@gmail.com">';

  // Create the table header (with fixed columns: Name, Age, Gender)
  html += "<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>";

  // Create the table body
  html += "<tbody>";

  // Iterate over each item in the data array
  data.forEach((item) => {
    html += "<tr>";

    // Add Name and Age columns (always present)
    html += `<td>${item.Name}</td>`;
    html += `<td>${item.Age}</td>`;

    // Add Gender column if it exists, otherwise leave it empty
    if (item.Gender) {
      html += `<td>${item.Gender}</td>`;
    } else {
      html += "<td></td>";
    }

    html += "</tr>";
  });

  // Close the table body and table tags
  html += "</tbody></table>";

  return html; // Return the generated HTML string
}
