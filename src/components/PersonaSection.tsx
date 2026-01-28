import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import myTechie from "@/assets/my-techie.png";
import singlePringles from "@/assets/single-pringles.png";
import theOdogwu from "@/assets/the-odogwu.png";
import myDayOnes from "@/assets/my-day-ones.png";
import myYardPeople from "@/assets/my-yard-people.png";
import theHusbandMaterial from "@/assets/the-husband-material.png";
import myOfficePeople from "@/assets/my-office-people.png";
import thePatientLover from "@/assets/the-patient-lover.png";
import theWifeMaterial from "@/assets/the-wife-material.png";
import theFitnessLover from "@/assets/the-fitness-lover.png";
import theSecretAdmirer from "@/assets/the-secret-admirer.png";
import theIntentionalLover from "@/assets/the-intentional-lover.png";

const personas = [
    {
        id: 1,
        image: myTechie,
        alt: "My Techie",
        title: "My Techie"
    },
    {
        id: 2,
        image: singlePringles,
        alt: "Single Pringles",
        title: "Single Pringles"
    },
    {
        id: 3,
        image: theOdogwu,
        alt: "The Odogwu",
        title: "The Odogwu"
    },
    {
        id: 4,
        image: myDayOnes,
        alt: "My Day Ones",
        title: "My Day Ones"
    },
    {
        id: 5,
        image: myYardPeople,
        alt: "My Yard People",
        title: "My Yard People"
    },
    {
        id: 6,
        image: theHusbandMaterial,
        alt: "The Husband Material",
        title: "The Husband Material"
    },
    {
        id: 7,
        image: myOfficePeople,
        alt: "My Office People",
        title: "My Office People"
    },
    {
        id: 8,
        image: thePatientLover,
        alt: "The Patient Lover",
        title: "The Patient Lover"
    },
    {
        id: 9,
        image: theWifeMaterial,
        alt: "The Wife Material",
        title: "The Wife Material"
    },
    {
        id: 10,
        image: theFitnessLover,
        alt: "The Fitness Lover",
        title: "The Fitness Lover"
    },
    {
        id: 11,
        image: theSecretAdmirer,
        alt: "The Secret Admirer",
        title: "The Secret Admirer"
    },
    {
        id: 12,
        image: theIntentionalLover,
        alt: "The Intentional Lover",
        title: "The Intentional Lover"
    }
];

const PersonaSection = () => {
    return (
        <section className="py-12 md:py-16 px-4 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
                        Who Are You Shopping For?
                    </h2>
                    <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                        Find the perfect surprise for everyone on your list
                    </p>
                </div>

                <div className="flex justify-center">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3000,
                            }),
                        ]}
                        className="w-full max-w-sm md:max-w-2xl lg:max-w-5xl"
                    >
                        <CarouselContent>
                            {personas.map((persona) => (
                                <CarouselItem key={persona.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                                    <div className="relative group overflow-hidden rounded-xl shadow-romantic hover:shadow-elevated transition-all duration-300">
                                        <div className="aspect-[3/4] overflow-hidden">
                                            <img
                                                src={persona.image}
                                                alt={persona.alt}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default PersonaSection;
