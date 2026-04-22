export const WhyUs = () => {
  return (
    <section className="w-full bg-white  py-10 px-4 sm:px-0 min-h-160 flex items-center">
      <div className="max-w-7xl mx-auto text-center space-y-10 my-10 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            <p>Why choose us</p>
            <p>We only work with schools and universities — and it shows</p>
            <p>
              We don't spread ourselves across industries. Every product we build and every service we offer is designed specifically for educational
              institutions — their workflows, their users, and their constraints.
            </p>
            <div>
              <span>Education-only focus</span>
              <span>Affordable pricing</span>
              <span>Local support team</span>
              <span>Fast implementation</span>
              <span>Training included</span>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              {/* card -1 */}
              <div>
                <div>01</div>
                <div>
                  <p>Built for how schools actually work</p>
                  <p>Our systems are designed around real school workflows — not adapted from generic business software</p>
                </div>
              </div>
              {/* card-2 */}
              <div>
                <div>02</div>
                <div>
                  <p>Onboarding & training included</p>
                  <p>We don't just hand you software and leave. We train your staff, support your launch, and stay available.</p>
                </div>
              </div>
              {/* card-3 */}
              <div>
                <div>03</div>
                <div>
                  <p>Designed for the African context</p>
                  <p>Low bandwidth, local languages, mobile-first, and local payment integrations — built in from the start</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
