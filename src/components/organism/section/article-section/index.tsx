import PrimaryBadge from "@/components/molecules/badge/primary-badge";
import ArticleCard from "@/components/molecules/card/article-card";
import { buttonVariants } from "@/components/ui/button";
import { APP_CONFIG } from "@/config/app.config";
import useScreenBreakpoint from "@/hook/use-screen-breakpoint";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ArticleSection = () => {
  const { isLargeDesktop } = useScreenBreakpoint();
  return (
    <section className="p-4 mb-20 lg:mb-40">
      <PrimaryBadge label="How it works" className="mb-12" />
      <div className="lg:flex lg:flex-row lg:justify-between lg:items-center mb-20">
        <div className="flex flex-col gap-4 lg:w-[700px] ">
          <h3 className="text-5xl leading-[38px] md:text-6xl flex flex-wrap gap-4 wrap-break-word lg:mb-4 font-maxima-nouva font-thin mb-6">
            <span>Leveraging</span>
            <span className="font-bold">advanced NLP</span>
            <span>techniques.</span>
          </h3>
          {!isLargeDesktop && (
            <p className="text-lg text-muted-foreground mb-12">
              Neos continuously refines its AI models through retraining,
              performance monitoring, and feedback loops to enhance narrative
              detection accuracy.
            </p>
          )}
          <Link
            to={APP_CONFIG.env.GITBOOK_URL}
            className={cn(
              buttonVariants({ variant: "link", size: "lg" }),
              "flex-start text-2xl text-start justify-start  p-0"
            )}
            target="_blank"
          >
            <span className="bg-gradient-to-r from-primary-foreground to-primary bg-clip-text text-transparent">
              Read documentation
            </span>
            <span className="ml-4">
              <ArrowRight size={48} className="size-[24px]" />
            </span>
          </Link>
        </div>

        {isLargeDesktop && (
          <div className="w-[500px]">
            <p className="text-lg text-muted-foreground mb-4">
              Neos continuously refines its AI models through retraining,
              performance monitoring, and feedback loops to enhance narrative
              detection accuracy.
            </p>
          </div>
        )}
      </div>
      <div className="mb-6 relative">
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3">
          <ArticleCard
            number="01"
            title="Data Collection"
            thumbnail="/image/article/article-1.svg"
            description="Neos gathers tweet data from top crypto influencers using the Twitter API to track emerging discussions."
          />

          <ArticleCard
            number="02"
            title="Narative Collection"
            thumbnail="/image/article/article-2.svg"
            description="Neos analyzes tweet content using NLP to detect trends, sentiment, and key crypto-related topics."
          />

          <ArticleCard
            number="03"
            title="Notification System"
            thumbnail="/image/article/article-3.svg"
            description="Neos instantly alerts users via our bot and gives a notification when crypto narratives are detected."
          />
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
