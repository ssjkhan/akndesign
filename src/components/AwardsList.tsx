export default function AwardsList() {
  const awardsList = [
    "$10k CAD Financial Grant, May 2022",
    "Essen Speil 2019 and Top Drawer 2020 for Misfits",
    "ITV Studios: How to Spend it Well",
    "Now Play This at Somerset House",
    "London Design Festival 2017",
  ];
  return (
    <section className="py-20">
      <div className="px-4 flex">
        <div className="mb-16 text-center w-full pt-24 ml-4">
          <div className="mt-2 text-alexRed text-4xl lg:text-5xl font-bold font-heading font-blogh">
            Awards and Press
          </div>
        </div>
        <div className="mb-8 pt-8 w-full">
          {awardsList.map((award, index) => (
            <div
              className="text-alexRed pt-4 pb-6 text-2xl border-b-2 border-alexRed font-roobert"
              key={index}
            >
              {award}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}