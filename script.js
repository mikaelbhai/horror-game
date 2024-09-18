// Story structure with choices leading to different outcomes
const storyData = {
    1: {
        text: "You wake up in a dark room. The air is thick with dust. You can hear faint footsteps above. There's a door in front of you, slightly ajar, and a window to the side.",
        choices: [
            { text: "Open the door", next: 2 },
            { text: "Look out the window", next: 3 },
            { text: "Hide under the bed", next: 4 },
            { text: "Investigate the footsteps", next: 5 }
        ]
    },
    2: {
        text: "The door creaks open. You find yourself in a dim hallway with portraits staring at you. There’s a staircase leading down and a faint light coming from a room at the end.",
        choices: [
            { text: "Go down the stairs", next: 6 },
            { text: "Enter the lit room", next: 7 },
            { text: "Inspect the portraits", next: 8 },
            { text: "Go back", next: 1 }
        ]
    },
    3: {
        text: "You peer out the window. A dense fog surrounds the mansion. You see movement in the shadows but can't make it out.",
        choices: [
            { text: "Climb out the window", next: 9 },
            { text: "Close the window and step back", next: 2 },
            { text: "Call for help", next: 10 },
            { text: "Look closer", next: 11 }
        ]
    },
    4: {
        text: "You crawl under the bed, your heart racing. You hear the door creak open, and a shadowy figure steps into the room.",
        choices: [
            { text: "Stay hidden", next: 12 },
            { text: "Run out from under the bed", next: 13 },
            { text: "Grab something to defend yourself", next: 14 },
            { text: "Hold your breath", next: 15 }
        ]
    },
    // Paths continue leading to different choices and endings...
    // Here's an example of a few endings:

    6: {
        text: "You descend the stairs into the basement. The air is cold. Suddenly, the door slams shut behind you. The lights flicker, and you realize you're not alone...",
        choices: [
            { text: "Investigate further", next: 'ending1' },
            { text: "Try to open the door", next: 'ending2' },
            { text: "Scream for help", next: 'ending3' },
            { text: "Stay quiet and hide", next: 'ending4' }
        ]
    },
    'ending1': {
        text: "You were never seen again. The darkness claimed you, and your fate became another ghost story of the mansion.",
        choices: []
    },
    'ending2': {
        text: "You managed to break free, but the horrors you witnessed will haunt you forever. You leave the mansion, but your mind will never escape.",
        choices: []
    },
    'ending3': {
        text: "Your screams echoed in the mansion. You were found by someone, but it was too late. You became one with the curse.",
        choices: []
    },
    'ending4': {
        text: "The silence enveloped you. Time passed, but nothing changed. You were trapped, forever lost in the darkness.",
        choices: []
    }
};

// Game state
let currentStoryPoint = 1;

function updateStory(point) {
    const story = storyData[point];
    document.getElementById("story-text").innerText = story.text;

    for (let i = 1; i <= 4; i++) {
        const choiceBtn = document.getElementById(`choice${i}`);
        if (story.choices[i - 1]) {
            choiceBtn.style.display = "block";
            choiceBtn.innerText = story.choices[i - 1].text;
            choiceBtn.onclick = () => updateStory(story.choices[i - 1].next);
        } else {
            choiceBtn.style.display = "none";
        }
    }
}

// Initialize game
updateStory(currentStoryPoint);
