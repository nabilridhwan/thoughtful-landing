interface FeatureCardProps {
    title: string;
    description: string;
    image: string;
    imageClassName?: string;
}

export default function FeatureCard({title, description, image, imageClassName}: FeatureCardProps) {
    return (

        <div className={'border border-black/10 rounded-3xl p-10 bg-foreground leading-loose'}>

            <h3 className={'font-bold text-2xl mb-1'}>{title}</h3>
            <p className={'text-xl text-white text-opacity-50'}>
                {description}
            </p>

            <div className={'flex flex-col items-center w-full'}>
                <img className={'rounded-2xl mt-10' + ' ' + imageClassName} src={image}/>
            </div>
        </div>


    )
}
