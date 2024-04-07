const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const userName = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Trevor Barack",
    position: "GirlHunter",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    text: `You know the scenario. It could be in an online meeting, or <br>
        perhaps you are seated around a boardroom table. The meeting <br>
        leader asks everyone to briefly introduce themselves.<br>
        Suddenly, your brain goes into hyperdrive. What should I say about myself?<br>`,
  },
  {
    name: "Samantha Smile",
    position: "Heart Breaker",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    text: `You start ruminating about previous self-introductions when you got<br>
    tongue-tied, when you forgot to mention something important, or worse, when<br>
    you rambled on for too long. Then, you realize you’re not listening to what the<br>
     others are sharing. If there was a quiz on everyone’s name, you would fail.<br>
`,
  },
  {
    name: "Hanibal Lecter",
    position: "Always hungry",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    text: `The stress associated with introducing yourself is common and not without<br>
     warrant. Everyone’s eyes and ears are on you. It’s easy to mess up. On the other<br>
      hand, self-introductions are the most direct way to reinforce your desired personal<br>
       brand. And they can be easy to do.<br>`,
  },
  {
    name: "Shine Star",
    position: "Water expert",
    photo: "https://randomuser.me/api/portraits/women/15.jpg",
    text: `
    Of course, what you share will depend on the situation and on the audience.<br>
     If you are not sure what to share, your name and job title is a great place<br>
      to start. If there’s an opportunity to elaborate, you can also share other <br>
      details such as a current project, your expertise, or your geographical location.<br>`,
  },
  {
    name: "Edgar Band",
    position: "Egg cleaner",
    photo: "https://randomuser.me/api/portraits/men/25.jpg",
    text: `The second part of your introduction is past tense. This is where you <br>
    can add two or three points that will provide people with relevant details about<br>
     your background. It is also your opportunity to establish credibility. Consider<br>
     your education and other credentials, past projects, employers, and accomplishments.<br>`,
  },
  {
    name: "Dark Side",
    position: "Manipulator",
    photo: "https://randomuser.me/api/portraits/women/25.jpg",
    text: `The third and last part in this framework is future-oriented. This is your <br>
    opportunity to demonstrate enthusiasm for what’s ahead. If you’re in a job interview,<br>
     you could share your eagerness about opportunities at the firm. If you’re in a meeting,<br>
      you could express interest in the meeting topic. If you’re kicking off a project<br>
       with a new team, you could talk about how excited you are, or share your goals for the project.<br>`,
  },
  {
    name: "Some Uglz",
    position: "Professional",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
    text: `The next time you’re in a meeting and someone says, “Let’s go around the<br>
     table and introduce ourselves,” you know what to do. Take a slow, deep breath,<br>
      and think, “Present, past, future.” Then smile and listen to everyone else until<br>
       it’s your turn. You got this!<br>`,
  },
];

let index = 0;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[index];
  testimonial.innerHTML = text;
  userImage.src = photo;
  userName.innerHTML = name;
  role.innerHTML = position;
  index++;

  if (index > testimonials.length - 1) {
    index = 0;
  }
}
updateTestimonial();
setInterval(updateTestimonial, 10000);
