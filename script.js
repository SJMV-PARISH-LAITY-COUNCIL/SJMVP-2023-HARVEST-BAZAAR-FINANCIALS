const sheetLinks = [
    {
        name: "Financial Report",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7m86AZgmLlzN2PsyG0Y6ysMCEOjZ0GXwRIIHp0xLkwbrHdkgcf8Cixm38jHOXNtLSInkgHgNOxCxi/pubhtml?gid=880872438&single=true"
    },
    {
        name: "Expenses",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7m86AZgmLlzN2PsyG0Y6ysMCEOjZ0GXwRIIHp0xLkwbrHdkgcf8Cixm38jHOXNtLSInkgHgNOxCxi/pubhtml?gid=1867562165&single=true"
    },
{
        name: "Chart: Summary of Funds",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7m86AZgmLlzN2PsyG0Y6ysMCEOjZ0GXwRIIHp0xLkwbrHdkgcf8Cixm38jHOXNtLSInkgHgNOxCxi/pubhtml?gid=1881158441&single=true"
    },
{
        name: "Adult Harvest/Bazaar",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7m86AZgmLlzN2PsyG0Y6ysMCEOjZ0GXwRIIHp0xLkwbrHdkgcf8Cixm38jHOXNtLSInkgHgNOxCxi/pubhtml?gid=289835620&single=true"
    },
{
        name: "Family Harvest Thanksgiving",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7m86AZgmLlzN2PsyG0Y6ysMCEOjZ0GXwRIIHp0xLkwbrHdkgcf8Cixm38jHOXNtLSInkgHgNOxCxi/pubhtml?gid=1399316540&single=true"
    },
    // Add more sheet links as needed
];

const sheetLinksContainer = document.getElementById("sheetLinks");
const sheetFrame = document.getElementById("sheetFrame");

sheetLinks.forEach(sheet => {
    const link = document.createElement("a");
    link.textContent = sheet.name;
    link.href = "#";
    link.addEventListener("click", () => {
        sheetFrame.src = sheet.url;
    });

    const listItem = document.createElement("li");
    listItem.appendChild(link);
    sheetLinksContainer.appendChild(listItem);
});
