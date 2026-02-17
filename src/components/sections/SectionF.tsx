export default function SectionF() {
    const testimonials = [
        {
            id: 1,
            image: "bg-gray-300",
            text: "Amazing work! The design captured our brand perfectly.",
            author: "Jane Doe",
        },
        {
            id: 2,
            image: "bg-gray-400",
            text: "Professional and creative. Highly recommended!",
            author: "John Smith",
        },
        {
            id: 3,
            image: "bg-gray-300",
            text: "Transformative results for our business.",
            author: "Alice Johnson",
        },
        {
            id: 4,
            image: "bg-gray-400",
            text: "The best agency we've worked with.",
            author: "Michael Brown",
        },
        {
            id: 5,
            image: "bg-gray-300",
            text: "Truly innovative solutions.",
            author: "Sarah Lee",
        },
    ];

    return (
        <section className="min-h-screen flex flex-col justify-center py-20 bg-gray-100 w-full overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <h2 className="text-3xl font-bold text-center text-gray-900">Testimonials</h2>
            </div>

            {/* Grid Layout: 2 Rows Scroll on Mobile, 1 Row Scroll on Desktop 
                grid-flow-col: Fills vertically first, then moves right.
                grid-rows-2: Forces 2 rows height.
            */}
            <div className="container mx-auto px-6 pb-10 gap-8 
                grid grid-flow-col auto-cols-[280px] grid-rows-2 
                lg:grid-rows-1
                overflow-x-auto snap-x snap-mandatory scrollbar-hide justify-start">

                {testimonials.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white p-4 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 snap-center"
                    >
                        {/* Polaroid Image Area */}
                        <div className={`w-full h-[240px] ${item.image} mb-4 flex items-center justify-center text-gray-500`}>
                            <span className="text-sm">Image</span>
                        </div>

                        {/* Polaroid Caption Area */}
                        <div className="text-center">
                            <p className="text-gray-800 font-handwriting text-lg italic mb-2">&quot;{item.text}&quot;</p>
                            <p className="text-gray-600 text-sm">- {item.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
