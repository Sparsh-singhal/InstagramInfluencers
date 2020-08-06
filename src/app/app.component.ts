import { Component } from '@angular/core';
import { faUser, faAddressBook, faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'antaragini';

	UserIcon = faUser;
	AddressBookIcon = faAddressBook;
	CogsIcon = faCogs;

	show: boolean = true;
	why = [
		{
			title: 'Be a trend-setter',
			content: 'Be the first to step in the realm of digital marketing',
			//   icon: 'faUser',
			icon: 'fa fa-user'
		},
		{
			title: 'Jump start your career',
			content: 'Get opportunities to network with celebrities and reputed brands',
			//   icon: 'faAddressBook',
			icon: 'fa fa-address-book'
		},
		{
			title: 'Enhance your skills',
			content: 'Design creative campaigns and improve on communication and managerial skills',
			//   icon: 'faCogs',
			icon: 'fa fa-cogs'
		},
		{
			title: 'Exciting benefits',
			content: '',
			//   icon: 'faUser',
			icon: 'fa fa-user'
		}
	];
	incentive = [
		{
			title: 'Certification',
			content: 'Get certificates from Antaragni, IIT Kanpur',
			icon: 'fa fa-trophy'
		},
		{
			title: 'Accomodation',
			content: 'Accommodation and Travel reimbursements to visit Antaragni',
			icon: 'fa fa-home'
		},
		{
			title: 'Internship Opportunities',
			content: 'Internship opportunities under renowned influencers and marketing agencies.',
			icon: 'fa fa-cogs'
		},
		{
			title: 'Goodies & Merchandise',
			content: 'Get a chance to cover Antaragni Giveaways by Antaragni like coupons, vouchers and goodies.',
			icon: 'fa fa-gift'
		},
		{
			title: 'Association',
			content: 'Get a chance to associate with famous brands and their campaigns through Antaragni',
			icon: 'fa fa-handshake-o'
		},
		{
			title: 'Presentation',
			content: 'Anchor events and shows at Antaragni',
			icon: 'fa fa-link'
		},
		{
			content: 'Courses of Social Media marketing online'
		}
	];
	contacts = [
		{
			src: 'https://imgk.timesnownews.com/story/Sushant_Singh.jpg?tr=w-1200,h-900',
			name: 'Sushant Singh Rajput',
			title: 'Manager, Hospitality',
			phone: '+91 9231234567',
			email: 'narendram@iitk.ac.in',
			linkedin: '#',
			instagram: '#',
			google: '#'
		},
		{
			src:
				'https://in.bmscdn.com/iedb/artist/images/website/poster/large/sanjana-sanghi-1091324-19-03-2018-08-15-27.jpg?1',
			name: 'Sanjana Sanghi',
			title: 'Manager, Hospitality',
			phone: '+91 9231234567',
			email: 'narendram@iitk.ac.in',
			linkedin: '#',
			instagram: '#',
			google: '#'
		},
		{
			src: 'https://imgk.timesnownews.com/story/Sushant_Singh.jpg?tr=w-1200,h-900',
			name: 'Sushant Singh Rajput',
			title: 'Manager, Hospitality',
			phone: '+91 9231234567',
			email: 'narendram@iitk.ac.in',
			linkedin: '#',
			instagram: '#',
			google: '#'
		},
		{
			src:
				'https://in.bmscdn.com/iedb/artist/images/website/poster/large/sanjana-sanghi-1091324-19-03-2018-08-15-27.jpg?1',
			name: 'Sanjana Sanghi',
			title: 'Manager, Hospitality',
			phone: '+91 9231234567',
			email: 'narendram@iitk.ac.in',
			linkedin: '#',
			instagram: '#',
			google: '#'
		},
		{
			src:
				'https://in.bmscdn.com/iedb/artist/images/website/poster/large/sanjana-sanghi-1091324-19-03-2018-08-15-27.jpg?1',
			name: 'Sanjana Sanghi',
			title: 'Manager, Hospitality',
			phone: '+91 9231234567',
			email: 'narendram@iitk.ac.in',
			linkedin: '#',
			instagram: '#',
			google: '#'
		}
	];
	facts = [
		{ icon: 'fa fa-trophy', title: 'COMPETITIONS', number: '75+' },
		{ icon: 'fa fa-university', title: 'COLLEGES', number: '350+' },
		{ icon: 'fa fa-globe', title: 'PROFESSIONAL SHOWS', number: '10+' }
	];
	FAQS = [
		{
			question: 'Who can be an Influencer?',
			answer: 'You must have a public Instagram account and be engaged regularly through content with youth. '
		},
		{
			question: 'How to become an Influencer?',
			answer:
				'You need to visit influencers.antaragni.in and register yourself by providing the required details.'
		},
		{
			question: 'What are the criteria on which an Influencer is judged?',
			answer:
				'A influencer will be awarded points based on how well he/she executes his/her responsibilities and how much he/she contributes in the execution of Antaragni.'
		},
		{
			question: 'How can an Influencer get assistance from Team Antaragni when required?',
			answer: 'You can contact Team Antaragni through any of the contacts provided in "Contact Us" section.'
		}
	];
	responsibilities = [
		{
			title: 'Publicize',
			content: 'Publicize Antaragni from their page, Publicize associated brands and their products.'
		},
		{
			title: 'Advertise',
			content: 'Publicize associated brands and their products.'
		},
		{
			title: 'Coordinate',
			content: 'Get people to register for Antaragni and help out Antaragni'
		}
	];
}
