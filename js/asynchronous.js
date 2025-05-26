// document.addEventListener("DOMContentLoaded", () => {
//   const mainContent = document.getElementById("content");

//   function loadPage(url, addToHistory = true) {
//     fetch(url)
//       .then(response => {
//         if (!response.ok) throw new Error(`Failed to fetch ${url}`);
//         return response.text();
//       })
//       .then(html => {
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, "text/html");
//         const newContent = doc.querySelector("main")?.innerHTML;
//         if (newContent) {
//           mainContent.innerHTML = newContent;
//           if (addToHistory) {
//             history.pushState({ url }, "", url);
//           }
//           window.scrollTo(0, 0);
//         } else {
//           throw new Error("Main content not found in new page.");
//         }
//       })
//       .catch(err => {
//         mainContent.innerHTML = `<p>Error loading page: ${err.message}</p>`;
//       });
//   }

//   document.querySelectorAll(".nav-link").forEach(link => {
//     link.addEventListener("click", e => {
//       e.preventDefault();
//       const url = e.target.getAttribute("href");
//       loadPage(url);
//     });
//   });

//   window.addEventListener("popstate", e => {
//     if (e.state?.url) {
//       loadPage(e.state.url, false);
//     }
//   });
// });
