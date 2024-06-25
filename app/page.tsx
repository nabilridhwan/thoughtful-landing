import Image from "next/image";

const upcomingFeatures = [
    {
        name: "Recap",
        isPremium: true,
    },
    {
        name: "Insightful Stats",
        isPremium: false,
    },
    {
        name: "Voice Recording",
        isPremium: false,
    },
    {
        name: "More Widgets",
        isPremium: true,
    },
    {
        name: "Reminders",
        isPremium: true,
    },
    {
        name: "iCloud Sync",
        isPremium: true,
    },
    {
        name: "Calendar View",
        isPremium: false,
    }

]

export default function Home() {
    return (
        <main className="w-11/12 mx-auto my-10">

            <div
                className={'text-center bg-gradient-to-b from-primary to-secondary pt-20 px-10 lg:px-20 pb-0 rounded-3xl flex flex-col items-center overflow-clip'}>

                <img className={'mb-5'} src={"/logo.png"}/>

                <div className={'lg:w-2/4 space-y-4 text-white'}>

                    <h1 className={'text-4xl lg:text-5xl font-bold text-white/50'}>
                        Cultivate Daily Gratitude with <span className={'text-white'}>Thoughtful</span> for iOS
                    </h1>

                    <h3 className={'text-xl text-white/70'}>
                        Reflect on life’s positive moments with handcrafted prompts and personalized experiences, all
                        while
                        keeping your data private.
                    </h3>
                </div>

                <img className={'max-w-[680px] lg:max-w-[800px] overflow-clip'} src={"/hero.png"}/>

            </div>

            <section className={'my-20'}>
                <h1 className={'text-center text-4xl font-bold'}>Features</h1>

                <div className={'grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'}>

                    <FeatureCard title={'Handcrafted Prompts'}
                                 description={'Thoughtfully designed prompts to inspire daily reflections'}
                                 image={'/prompts.png'}/>
                    <FeatureCard title={"Widgets"}
                                 description={"Visually appealing widgets that keep gratitude practices front and center on your home screen."}
                                 image={"/widget.png"}/>
                    <FeatureCard title={"Privacy"}
                                 description={"All data is stored locally on your device to ensure privacy. Even with your data in iCloud, your data reminds encrypted and safe."}
                                 image={"/privacy.png"}/>


                </div>

                <div className={'text-center  mt-10 mb-32'}>
                    <p className={'text-lg'}>and many more to come...</p>

                    <div
                        className={'my-7 lg:px-[300px] flex flex-row gap-2 text-3xl font-bold flex-wrap items-center justify-center'}>
                        {upcomingFeatures.map((item, idx) => (
                            <div key={item.name}>

                        <span>
                            {item.name}{item.isPremium && <span className={'text-primary'}>*</span>}
                        </span>

                                {idx !== upcomingFeatures.length - 1 &&
                                    <span className={'ml-2 text-black text-opacity-50'}>•</span>}
                            </div>
                        ))}
                    </div>

                    <p className={'text-center'}>
                        * exclusive to <span className={'font-bold'}>Thoughtful Powerpack</span>
                    </p>

                </div>

            </section>

            <section className={'text-center lg:mx-80 space-y-8 my-20 leading-loose'}>
                <h1 className={'text-center text-4xl font-bold'}>Why Thoughtful?</h1>

                <p>

                    Gratitude has been shown to improve mental health, increase happiness, and foster a positive outlook
                    on life. I created Thoughtful to make the practice of gratitude accessible, enjoyable, and secure
                    for everyone. By incorporating daily prompts and interactive widgets, I aim to make your gratitude
                    journey a delightful part of your routine.
                </p>

                <p>
                    User experience is at the heart of Thoughtful. I have personally been testing the app internally and
                    using it daily on my own device. This hands-on approach allows me to identify areas for improvement
                    and ensure that Thoughtful is something I would genuinely use. Every feature in this app is
                    carefully crafted, from the initial concept to what you see on your screens.
                </p>

            </section>


            <section className={'text-center'}>
                <div className={'border border-black/30 rounded-3xl p-10 space-y-5'}>

                    <h3 className={'font-bold text-3xl'}>Stay updated and show your interest</h3>
                    <p className={'text-xl text-black text-opacity-50'}>
                        Thoughtful is not yet available on the App Store. Sign up to be the first to know when it
                        launches!
                    </p>

                    <a href={"https://dat3fhfvvgk.typeform.com/to/BzRGkM7i"} className={'my-3 block underline text-lg'}>
                        Click here
                    </a>

                    <i className={'mt-8 text-black text-opacity-50 text-sm block'}>You&apos;ll be redirected to a
                        Typeform link</i>

                </div>

            </section>

            <footer className={'mt-32 text-center'}>
                Created by <a href={"https://github.com/nabilridhwan"}>Nabil Ridhwan</a>
            </footer>

        </main>
    );
}

interface FeatureCardProps {
    title: string;
    description: string;
    image: string;
}

function FeatureCard({title, description, image}: FeatureCardProps) {
    return (

        <div className={'border border-black/10 rounded-3xl p-10 leading-loose'}>

            <h3 className={'font-bold text-2xl mb-1'}>{title}</h3>
            <p className={'text-xl text-black text-opacity-50'}>
                {description}
            </p>

            <div className={'flex flex-col items-center w-full'}>
                <img className={'mt-10'} src={image}/>
            </div>
        </div>


    )
}
