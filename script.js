
    const opportunities = [

    // INTERNSHIPS

    {
        title: "Google Summer of Code",
        category: "internships",
        link: "https://summerofcode.withgoogle.com/"
    },

    {
        title: "NASA Internships",
        category: "internships",
        link: "https://intern.nasa.gov/"
    },

    {
        title: "Microsoft Explore",
        category: "internships",
        link: "https://careers.microsoft.com/"
    },

    {
        title: "CERN Student Program",
        category: "internships",
        link: "https://careers.cern/"
    },

    {
        title: "Meta University",
        category: "internships",
        link: "https://www.metacareers.com/"
    },



    // COMPETITIONS

    {
        title: "NASA Space Apps Challenge",
        category: "competitions",
        link: "https://www.spaceappschallenge.org/"
    },

    {
        title: "Conrad Challenge",
        category: "competitions",
        link: "https://www.conradchallenge.org/"
    },

    {
        title: "Technovation Girls",
        category: "competitions",
        link: "https://technovationchallenge.org/"
    },

    {
        title: "Diamond Challenge",
        category: "competitions",
        link: "https://diamondchallenge.org/"
    },

    {
        title: "World Scholar's Cup",
        category: "competitions",
        link: "https://www.scholarscup.org/"
    },



    // SCHOLARSHIPS

    {
        title: "Rise",
        category: "scholarships",
        link: "https://www.risefortheworld.org/"
    },

    {
        title: "QuestBridge",
        category: "scholarships",
        link: "https://www.questbridge.org/"
    },

    {
        title: "The Gates Scholarship",
        category: "scholarships",
        link: "https://www.thegatesscholarship.org/"
    },

    {
        title: "Coca-Cola Scholars",
        category: "scholarships",
        link: "https://www.coca-colascholarsfoundation.org/"
    },

    {
        title: "Davidson Fellows",
        category: "scholarships",
        link: "https://www.davidsongifted.org/"
    },



    // COURSES

    {
        title: "Harvard CS50",
        category: "courses",
        link: "https://cs50.harvard.edu/"
    },

    {
        title: "MIT OpenCourseWare",
        category: "courses",
        link: "https://ocw.mit.edu/"
    },

    {
        title: "Khan Academy",
        category: "courses",
        link: "https://www.khanacademy.org/"
    },

    {
        title: "Machine Learning by Andrew Ng",
        category: "courses",
        link: "https://www.coursera.org/"
    },

    {
        title: "freeCodeCamp",
        category: "courses",
        link: "https://www.freecodecamp.org/"
    }

];

function createCard(opportunity) {
    return `
        <div class="featured-card">
            <h3>${opportunity.title}</h3>

            <a href="${opportunity.link}"
               target="_blank"
               class="apply-btn">
               Visit
            </a>
        </div>
    `;
}

function displayOpportunities(list) {

    const internships =
        document.getElementById("internships");

    const competitions =
        document.getElementById("competitions");

    const scholarships =
        document.getElementById("scholarships");

    const courses =
        document.getElementById("courses");

    if (!internships) return;

    internships.innerHTML = "";
    competitions.innerHTML = "";
    scholarships.innerHTML = "";
    courses.innerHTML = "";

    list.forEach(opportunity => {

        if (opportunity.category === "internships") {
            internships.innerHTML += createCard(opportunity);
        }

        if (opportunity.category === "competitions") {
            competitions.innerHTML += createCard(opportunity);
        }

        if (opportunity.category === "scholarships") {
            scholarships.innerHTML += createCard(opportunity);
        }

        if (opportunity.category === "courses") {
            courses.innerHTML += createCard(opportunity);
        }

    });
}

displayOpportunities(opportunities);

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value =
            searchInput.value.toLowerCase();

        const filtered =
            opportunities.filter(opportunity =>
                opportunity.title
                .toLowerCase()
                .includes(value)
            );

        displayOpportunities(filtered);

    });

}
function filterCategory(category) {

    if (category === "all") {
        displayOpportunities(opportunities);
        return;
    }

    const filtered =
        opportunities.filter(opportunity =>
            opportunity.category === category
        );

    displayOpportunities(filtered);
}