import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

interface TimelineDetail {
    title: string;
    text: string;
}

interface TimelineItem {
    id: number;
    title: string;
    description: string;
    details: TimelineDetail[];
    imageWidth: string;
}

interface Stat {
    icon: string;
    value: string;
    label: string;
}


@Component({
  selector: 'app-home',
   standalone: true,
    imports: [CommonModule, ButtonModule, StyleClassModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
     styles: [
        `
            @keyframes marquee {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }

            .animate-marquee {
                animation: marquee 30s linear infinite;
            }
        `
    ]
})

export class Home  {
    features: string[] = ['Arcu purus', 'Posuere felis', 'Curabitur mollis', 'Vitae odio', 'Orci, mi', 'Tincidunt vulputate', 'Quis felis', 'Dignissim vivamus'];

    basicFeatures: (boolean | string)[] = [true, true, true, true, false, false, false, '5'];
    premiumFeatures: (boolean | string)[] = [true, true, true, true, true, false, false, '10'];
    enterpriseFeatures: (boolean | string)[] = [true, true, true, true, true, true, true, 'Unlimited'];

    stats: Stat[] = [
        {
            icon: 'pi pi-video',
            value: '52000',
            label: 'Streams'
        },
        {
            icon: 'pi pi-heart',
            value: '21000',
            label: 'Engagement'
        },
        {
            icon: 'pi pi-clock',
            value: '71.2',
            label: 'Watch Time'
        },
        {
            icon: 'pi pi-thumbs-up',
            value: '4500',
            label: 'Likes'
        }
    ];

    timelineItems: TimelineItem[] = [
        {
            id: 1,
            title: 'Ornare Arcu Odio',
            description: 'Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.',
            details: [
                {
                    title: 'Sed lectus vestibulum',
                    text: 'mattis ullamcorper velit. Laoreet sit amet cursus sit.'
                },
                {
                    title: 'Fames ac turpis',
                    text: 'egestas sed tempus urna et. Cursus turpis massa.'
                }
            ],
            imageWidth: '23rem'
        },
        {
            id: 2,
            title: 'A diam maecenas',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            details: [
                {
                    title: 'Quis hendrerit dolor',
                    text: 'magna eget est. Pellentesque pulvinar pellentesque.'
                },
                {
                    title: 'Lectus urna duis',
                    text: 'convallis convallis tellus id interdum velit laoreet.'
                }
            ],
            imageWidth: '14rem'
        },
        {
            id: 3,
            title: 'Pharetra et ultrices neque',
            description: 'Id interdum velit laoreet id. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet.',
            details: [
                {
                    title: 'Egestas dui id',
                    text: 'ornare arcu odio ut. Mi bibendum neque egestas congue.'
                },
                {
                    title: 'Sed velit dignissim',
                    text: 'sodales ut eu. Massa placerat duis ultricies lacus.'
                }
            ],
            imageWidth: '25rem'
        }
    ];

    companyItems: string[] = ['About Us', 'News', 'Investor Relations', 'Careers', 'Media Kit'];
    resourceItems: string[] = ['Get Started', 'Learn', 'Case Studies'];
    developerItems: string[] = ['Courses', 'Documentation', 'API Reference', 'Status', 'Papers', 'Development Blog'];
    communityItems: string[] = ['Discord', 'Events', 'FAQ', 'Blog'];
    connectItems: string[] = ['Newsletters', 'Press', 'Code of Conduct', 'Security Guide', 'Bug Bounty Program'];
    legalItems: string[] = ['Brand Policy', 'Privacy Policy', 'Terms of Service'];
    socialIcons: string[] = ['twitter', 'github', 'slack'];
}