import { Component } from '@angular/core';
import {
  faUser,
  faAddressBook,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'antaragini';

  UserIcon = faUser;
  AddressBookIcon = faAddressBook;
  CogsIcon = faCogs;

  show: boolean = true;
  why = [
    {
      title: 'Be a leader',
      content:
        "Represent your college as you help organize one of Asia's largest cultural fests",
      //   icon: 'faUser',
      icon: 'fa fa-user',
    },
    {
      title: 'Networking',
      content:
        'Get opportunities to interact with celebrities from various fields',
      //   icon: 'faAddressBook',
      icon: 'fa fa-address-book',
    },
    {
      title: 'Enhance your skills',
      content: 'Improve your communication and managerial abilities',
      //   icon: 'faCogs',
      icon: 'fa fa-cogs',
    },
    {
      title: 'Free Courses',
      content: 'Top-performing CAs to get access to Online courses.',
      //   icon: 'faUser',
      icon: 'fa fa-user',
    },
  ];
  incentive = [
    {
      title: 'Certification',
      content:
        'Certificate of appreciation from Antaragni’19, IIT Kanpur recognizing your hardwork.',
      icon: 'fa fa-trophy',
    },
    {
      title: 'Accomodation',
      content:
        'Free accommodation for the top-performing campus ambassadors @ Antaragni 2019',
      icon: 'fa fa-home',
    },
    {
      title: 'Internship Opportunities',
      content:
        'Top 40 will get a chance to gain professional experience through Internships provided by VSkills and SkillSanta.',
      icon: 'fa fa-cogs',
    },
    {
      title: 'Goodies & Merchandise',
      content:
        'Win Antaragni merchandise, promising rewards, gift vouchers from top brands and much more!. Fill this form before the coming slots go off.To prioritize your interest, Use College Reference Code: FOXIITK19',
      icon: 'fa fa-gift',
    },
  ];
  contacts = [
    {
      src:
        'https://imgk.timesnownews.com/story/Sushant_Singh.jpg?tr=w-1200,h-900',
      name: 'Sushant Singh Rajput',
      title: 'Manager, Hospitality',
      phone: '+91 9231234567',
      email: 'narendramodi@iitk.ac.in',
      linkedin: '#',
      facebook: '#',
      google: '#',
    },
    {
      src:
        'https://in.bmscdn.com/iedb/artist/images/website/poster/large/sanjana-sanghi-1091324-19-03-2018-08-15-27.jpg?1',
      name: 'Sanjana Sanghi',
      title: 'Manager, Hospitality',
      phone: '+91 9231234567',
      email: 'narendramodi@iitk.ac.in',
      linkedin: '#',
      facebook: '#',
      google: '#',
    },
    {
      src:
        'https://imgk.timesnownews.com/story/Sushant_Singh.jpg?tr=w-1200,h-900',
      name: 'Sushant Singh Rajput',
      title: 'Manager, Hospitality',
      phone: '+91 9231234567',
      email: 'narendramodi@iitk.ac.in',
      linkedin: '#',
      facebook: '#',
      google: '#',
    },
    {
      src:
        'https://in.bmscdn.com/iedb/artist/images/website/poster/large/sanjana-sanghi-1091324-19-03-2018-08-15-27.jpg?1',
      name: 'Sanjana Sanghi',
      title: 'Manager, Hospitality',
      phone: '+91 9231234567',
      email: 'narendramodi@iitk.ac.in',
      linkedin: '#',
      facebook: '#',
      google: '#',
    },
    {
      src:
        'https://in.bmscdn.com/iedb/artist/images/website/poster/large/sanjana-sanghi-1091324-19-03-2018-08-15-27.jpg?1',
      name: 'Sanjana Sanghi',
      title: 'Manager, Hospitality',
      phone: '+91 9231234567',
      email: 'narendramodi@iitk.ac.in',
      linkedin: '#',
      facebook: '#',
      google: '#',
    },
  ];
  facts = [
    { icon: 'fa fa-trophy', title: 'COMPETITIONS', number: '75+' },
    { icon: 'fa fa-university', title: 'COLLEGES', number: '350+' },
    { icon: 'fa fa-globe', title: 'PROFESSIONAL SHOWS', number: '10+' },
  ];
  FAQS = [
    {
      question: 'Who can be a Campus Ambassador?',
      answer:
        'If you are a college student with a valid college ID, then you are good to go.',
    },
    {
      question: 'How to become a Campus Ambassador?',
      answer:
        'You need to visit ca.antaragni.in and register yourself by providing the required details.',
    },
    {
      question: 'What are the criteria on which a Campus Ambassador is judged?',
      answer:
        "A CA will be awarded points based on how well he/she executes his/her responsibilities and how much he/she contributes in the execution of Antaragni '19.",
    },
    {
      question:
        'How can a CA get assistance from Team Antaragni when required?',
      answer:
        'You can contact Team Antaragni using "Contact Us" section. The team will get back to you through the email address or phone number provided by you.',
    },
  ];
  responsibilities = [
    {
      // img: 'https://img.freepik.com/free-vector/loudspeaker-flat-people-characters_126608-77.jpg?size=626&ext=jpg',
      title: 'ADVERTISE',
      content:
        'Publicize Antaragni in your college by sharing posts and promoting content by becoming a focal point for your respective college.',
    },
    {
      title: 'ORGANIZE',
      content:
        'Organize events, workshops and sessions regarding Antaragni and what it has to offer with assistance from mentors',
    },
    {
      title: 'CONDUCT',
      content:
        'Help in management of elimination rounds in your college and city to select participants for the main event.',
    },
    {
      title: 'COORDINATE',
      content:
        'Collaborate with the Antaragni team in organising on-ground events in your city.',
    },
  ];
}
