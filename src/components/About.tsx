import Title from './Common/Title';
import data from '@/data/data.json';
import Image from 'next/image';
import React from 'react';

const timeSince = new Date().getFullYear() - 2021;

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center" id="about">
            <Title num={1} title="About me" />

            <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
                <div className="mt-10 text-xl text-textDark md:w-1/2">
                    <p>
                        📌 I started my Front End Engineer journey {timeSince}{' '}
                        years ago learning HTML, CSS, JavaScript, and React. I
                        have completed a handful of online certificates from
                        Codecademy and TreeHouse that have expanded my knowledge
                        using programs such as Figma, Storybook, and Insomnia. I
                        am obsessed with Chrome DevTools.
                    </p>
                    <br />
                    <p>
                        📌 Additionally, prior to starting my tech adventure, I
                        worked in retail store management for about 10 years. My
                        goal was to provide the best experience possible to each
                        and every customer. I strived to exceed expectations and
                        improve the customer experience while continuing to lead
                        a team and complete projects with proficient time
                        management.
                    </p>
                    <br />
                    <p>
                        📌 My passion is providing excellent customer service
                        and helping clients excel in their fields. I am a quick
                        learner with a fun, outgoing personality. In addition, I
                        transcend in the ability to work under pressure and
                        handle stressful situations very well.
                    </p>
                </div>

                <div className="relative mx-auto mt-20 border-2 rounded-full md:mt-0 md:ml-20 w-80 h-80 border-neon">
                    <Image
                        alt={data.name}
                        className="rounded-full"
                        layout="fill"
                        objectFit="contain"
                        src={data.image}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
