import { Briefcase } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* LEFT COLUMN */}
          <div className="h-full flex flex-col space-y-7">
            <h3 className="text-2xl font-semibold">
              Data Analyst Transitioning into Front-End Development
            </h3>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              I am a detail-oriented data analyst with 4 years of experience
              delivering accurate and scalable analytics solutions, currently
              expanding my skill set into front-end development through
              self-directed learning.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              I excel at translating business requirements into clean,
              user-friendly interfaces, integrating APIs and data sources, and
              ensuring data accuracy through rigorous testing and validation.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              By combining my strong analytical background with modern front-end
              development practices, I am focused on building responsive,
              performance-driven web applications that effectively meet business
              goals and user needs.
            </p>

            <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-8 items-center justify-center">
              <a href="#contact" className="cosmic-button">
                Get in touch
              </a>
              <a
                href="/Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="h-full flex flex-col gap-6">
            <div className=" flex flex-row justify-center p-3 gap-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>

            <div className="gradient-border p-6 card-hover flex-1">
              <div className="flex items-start gap-4 h-full">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-4 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">
                    Genpact (Assistant Manager) Oct ’24 – Present
                  </h4>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1 mb-1">
                    <li>
                      Conducted ad hoc analyses on vaccine series completion,
                      co-administration, TRx/NBRx performance, market share, and
                      retailer/geographic trends.
                    </li>
                    <li>
                      Designed and automated a Power BI dashboard delivering
                      national, retailer, and geographic KPI insights.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover flex-1">
              <div className="flex items-start gap-4 h-full">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    ZS Associates (Associate) Aug ’21 – Aug ’24
                  </h4>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1 ">
                    <li>
                      Integrated multi-vendor patient-level data using AWS
                      Redshift.
                    </li>
                    <li>Built KPI dashboards using Tableau and Dataiku DSS.</li>
                    <li>
                      Improved data reliability via ETL checks and JIRA testing.
                    </li>
                    <li>
                      Supported analytics initiatives including HCP segmentation
                      and ETL design.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
