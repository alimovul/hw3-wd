let answers = [
    {
        keywords: ["hello", "hi", "salut", "hey"],
        answer: "Hi! I am Alex's portfolio chatbot. You can ask me about skills, projects, studies or contact."
    },
    {
        keywords: ["name", "who", "alex", "butoi", "ali"],
        answer: "This portfolio belongs to Alexandru-Gabriel BUTOI, a first year Computer Science student at UVT."
    },
    {
        keywords: ["study", "university", "uvt", "faculty", "school"],
        answer: "Alex studies Computer Science at the West University of Timisoara."
    },
    {
        keywords: ["skill", "skills", "tech", "programming", "language"],
        answer: "Some of his skills are C++, Python, HTML, CSS, JavaScript, Git and basic web development."
    },
    {
        keywords: ["project", "projects", "work", "made"],
        answer: "His projects include this portfolio, a scheduling app idea, small web pages and programming exercises."
    },
    {
        keywords: ["smartshift", "shift", "schedule"],
        answer: "SmartShift is a project idea for creating work schedules automatically."
    },
    {
        keywords: ["contact", "email", "message"],
        answer: "You can contact Alex from the Contact page of this portfolio."
    },
    {
        keywords: ["github", "repo", "code"],
        answer: "Alex uses GitHub to upload and manage his code."
    }
];

let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");

function addMessage(sender, text) {
    let message = document.createElement("div");
    message.classList.add("message");

    message.innerHTML = "<strong>" + sender + ":</strong> " + text;
    chatContainer.appendChild(message);

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getAnswer(text) {
    let lowerText = text.toLowerCase();

    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < answers[i].keywords.length; j++) {
            if (lowerText.includes(answers[i].keywords[j])) {
                return answers[i].answer;
            }
        }
    }

    return "I do not know the answer to that. Try asking about skills, projects, studies or contact.";
}

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let text = userInput.value.trim();

    if (text === "") {
        return;
    }

    addMessage("You", text);

    let botAnswer = getAnswer(text);
    addMessage("Bot", botAnswer);

    userInput.value = "";
});

addMessage("Bot", "Hi! Ask me something about Alex's portfolio.");