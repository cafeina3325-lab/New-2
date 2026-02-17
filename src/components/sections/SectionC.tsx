export default function SectionC() {
    const events = [
        { id: 1, title: "Event 1", desc: "Limited Edition" },
        { id: 2, title: "Event 2", desc: "Special Offer" },
        { id: 3, title: "Event 3", desc: "New Arrival" },
        { id: 4, title: "Event 4", desc: "Artist Collab" },
        { id: 5, title: "Event 5", desc: "Seasonal Style" },
    ];

    return (
        <section className="min-h-screen flex flex-col justify-center py-20 bg-white w-full overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Monthly Drops</h2>
                    <p className="text-gray-600">이달의 이벤트 매월 새로운 소식을 전합니다</p>
                </div>

                {/* Horizontal Scroll Image Cards */}
                <div className="flex overflow-x-auto pb-12 gap-6 snap-x snap-mandatory scrollbar-hide mb-12 px-4">
                    {events.map((event) => (
                        <div key={event.id} className="filter drop-shadow-md transition-transform hover:-translate-y-2 duration-300">
                            <div
                                className="flex-shrink-0 w-[280px] h-[320px] bg-gray-100 flex items-center justify-center text-gray-400 snap-center relative group overflow-hidden"
                                style={{
                                    clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
                                    WebkitClipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)"
                                }}
                            >
                                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                                    <span className="text-lg">Image {event.id}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Information Card (Notion) */}
                <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-100 rounded-lg p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2 inline-block">Notion</h3>
                    <ul className="space-y-2 text-gray-600 list-disc list-inside text-sm md:text-base">
                        <li>이달의 이벤트 도안은 한정기간 동안만 진행됩니다.</li>
                        <li>예약 마감 시 조기 종료 될 수 있습니다.</li>
                        <li>갤러리 이미지는 참고용이며 동일한 결과를 보장하지 않습니다.</li>
                        <li>피부상태·부위·에이징에 따라 표현이 달라질 수 있습니다.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
