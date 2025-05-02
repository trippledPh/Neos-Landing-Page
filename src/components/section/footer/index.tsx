import {
  FOOTER_DATA_LEFT_SIDE,
  FOOTER_DATA_RIGHT_SIDE,
} from "@/data/footer.data";
import { SOCIALS_DATA } from "@/data/socials.data";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <section
      className="p-4 relative lg:flex lg:flex-row lg:justify-between lg:items-center"
      id="footer"
    >
      <div className="flex flex-col gap-4 ">
        <div className="flex items-center gap-4">
          <img
            src="/image/logos/neos-footer-logo-black.png"
            alt="Neos Logo"
            className="object-fit  h-[84px]"
          />
        </div>
        <div className="px-4 flex flex-col gap-6">
          <p className="text-muted-foreground lg:max-w-[400px]">
            Stay ahead of the trend with AI-powered bot that analyzes tweets
            from top crypto influencers in real-time.
          </p>

          <div className="flex gap-4">
            {SOCIALS_DATA.map((social) => (
              <Link to={social.url} key={social.id}>
                <div className="p-4 rounded-md bg-[#181818] text-white">
                  <img
                    src={social.icon}
                    alt={social.name}
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <ul className="flex flex-col gap-2 text-muted-foreground">
          {FOOTER_DATA_LEFT_SIDE.map((item) => (
            <li key={item.id}>
              <Link to={item.url} className="text-xl">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-2 text-muted-foreground">
          {FOOTER_DATA_RIGHT_SIDE.map((item) => (
            <li key={item.id}>
              <Link to={item.url} className="text-lg">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FooterSection;
