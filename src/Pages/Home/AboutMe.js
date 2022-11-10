import React from 'react';

const AboutMe = () => {
    return (
        <div className='p-2'>
            <h2 className='text-4xl font-bold text-center mb-8'>About Me</h2>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <img src="https://i.ibb.co/NS1ZQTt/S-0004.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl text-center"><i>STYLE & APPROACH</i></h1>
                        <small className="py-6">I use a combination of photojournalism, artistic portraiture, and landscape techniques to tell stories heavy on emotion and atmosphere.  While I don't aspire to be your weird new best friend, my goal is get to know you so I can document your event through the eyes of a friend.  I don't have a formula or template for photographing weddings--each day, couple and story is unique. As an alternating combination of wallflower and cheerful taskmaster, I quietly get in the thick of things to capture events as they unfold, and provide clear, positive guidance for everyone to look their best in portraits.  I think it's fair to say most people feel awkward having their photo taken (I feel the same unless the right person is behind the lens!), so I'm very forthcoming with direction, dialogue and inspiration.With over 300 weddings under my belt, I'm also happy to assist with those things normal humans don't do on a daily basis: bustling a gown, pinning a boutonniere, troubleshooting a zipper on a bridesmaid's dress (why are they always terrible?), hooking French buttons, cutting the X threads from suit jacket backs, and reminding you to take your hair tie off your wrist before photos.I enthusiastically support marriage equality.  Humanity is beautiful.  Bring it.
                        </small>
                        <br /><br />
                        <h1 className="text-xl text-center"><i>THE PROCESS</i></h1>
                        <small className="py-6">Once I create your photos, I begin my custom artistic mastering process.  I want your photographs to look amazing for decades to come, so I edit my wedding and engagement photographs as I would my landscapes: true, vibrant colors that feel like they did in person, and classic black and whites that focus in on the moment.  I don't do extensive Photoshop unless under a special request--I believe in real, natural beauty (and doing my job with flattering posing in portraits).
                        </small>
                        <br />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;