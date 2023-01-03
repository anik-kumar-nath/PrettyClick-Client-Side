import React from 'react';
import TeamCard from './TeamCard';
import photographer1 from './../../Asset/Photographer/photographer1.jpg'
import photographer2 from './../../Asset/Photographer/photographer2.jpg'
import photographer3 from './../../Asset/Photographer/photographer3.jpg'
import photographer4 from './../../Asset/Photographer/photographer4.jpg'

const MyTeam = () => {
    const teamMember = [
        {
            name: 'Anthony Geek',
            title: 'Event Manager',
            about: 'Vastly experienced in event management.',
            photo: photographer1,
            twitter: 'https://pretty-click.web.app/',
            facebook: 'https://pretty-click.web.app/'
        },
        {
            name: 'Sophie Denmo',
            title: 'Lead Photographer',
            about: 'Vastly experienced in event photography',
            photo: photographer2,
            twitter: 'https://pretty-click.web.app/',
            facebook: 'https://pretty-click.web.app/'
        },
        {
            name: 'Benedict Caro',
            title: 'Designer',
            about: 'Vastly experienced in Design.',
            photo: photographer3,
            twitter: 'https://pretty-click.web.app/',
            facebook: 'https://pretty-click.web.app/'
        },
        {
            name: 'Annie Leibovitz',
            title: 'Lead Editor.',
            about: 'Vastly experienced in Editing.',
            photo: photographer4,
            twitter: 'https://pretty-click.web.app/',
            facebook: 'https://pretty-click.web.app/'
        }
    ]
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12" data-aos="flip-right"
                    data-aos-easing="ease-out-cubic" data-aos-once="true" data-aos-duration="1500">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-orange-200/60">
                            Core Team
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block  text-primary"
                            >
                                <defs>
                                    <pattern
                                        id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">Welcome</span>
                        </span>{' '}
                        my talented team of professionals
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        A young enthusiastic team with a bunch of talents and experience. They are able to work 24/7 for the seek a perfect project done on time.
                    </p>
                </div>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        teamMember.map((member, i) => <TeamCard key={i} photo={member.photo} name={member.name} title={member.title} about={member.about} twitter={member.twitter} facebook={member.facebook} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyTeam;