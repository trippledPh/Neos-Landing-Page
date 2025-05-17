import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import Header from "@/components/templates/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePagination } from "@/hooks/use-pagination";
import { ArrowUp, Filter, SortAsc } from "lucide-react";
import { useState } from "react";
import NarrativeCard from "@/components/molecules/card/narrative-card";
import LaunchPadFilterModal from "@/components/molecules/modal/launchpad-filter-modal";
import LaunchPadSortModal from "@/components/molecules/modal/launchpad-sort-modal";

const NarrativeScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [paginationItemsToDisplay, setPaginationItemsToDisplay] = useState(5);

  const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
    currentPage,
    totalPages,
    paginationItemsToDisplay,
  });
  return (
    <section className="overflow-visible mx-auto max-w-[1440px]">
      <Header />
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-semibold font-maxima-nouva">
          Trending Narratives
        </h2>
        <div className="flex gap-2">
          <LaunchPadSortModal />
          <LaunchPadFilterModal />
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4 overflow-y-auto md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        <NarrativeCard
          title="Grok Tales"
          author="@elom musk"
          date="May 3, 2025"
          upvotes={1000}
        />

        <NarrativeCard
          title="Grok Tales"
          author="@elom musk"
          date="May 3, 2025"
          upvotes={1000}
        />

        <NarrativeCard
          title="Grok Tales"
          author="@elom musk"
          date="May 3, 2025"
          upvotes={1000}
        />

        <NarrativeCard
          title="Grok Tales"
          author="@elom musk"
          date="May 3, 2025"
          upvotes={1000}
        />

        <NarrativeCard
          title="Grok Tales"
          author="@elom musk"
          date="May 3, 2025"
          upvotes={1000}
        />

        <NarrativeCard
          title="Grok Tales"
          author="@elom musk"
          date="May 3, 2025"
          upvotes={1000}
        />
        <NarrativeCard
          title="Grok Tales"
          author="@elom musk"
          date="May 3, 2025"
          upvotes={1000}
        />
        <NarrativeCard
          title="Grok Tales"
          author="@elom musk"
          date="May 3, 2025"
          upvotes={1000}
        />
        <NarrativeCard
          title="Grok Tales"
          author="@elom musk"
          date="May 3, 2025"
          upvotes={1000}
        />

        <NarrativeCard
          title="Grok Tales"
          author="@elom musk"
          date="May 3, 2025"
          upvotes={1000}
        />
      </div>

      <div className="p-4">
        <Pagination>
          <PaginationContent>
            {/* First page button */}
            <PaginationItem>
              <PaginationLink
                className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
                href={
                  currentPage === 1 ? undefined : `#/page/${currentPage - 1}`
                }
                aria-label="Go to first page"
                aria-disabled={currentPage === 1 ? true : undefined}
                role={currentPage === 1 ? "link" : undefined}
              >
                <ChevronFirstIcon size={16} aria-hidden="true" />
              </PaginationLink>
            </PaginationItem>

            {/* Previous page button */}
            <PaginationItem>
              <PaginationLink
                className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
                href={
                  currentPage === 1 ? undefined : `#/page/${currentPage - 1}`
                }
                aria-label="Go to previous page"
                aria-disabled={currentPage === 1 ? true : undefined}
                role={currentPage === 1 ? "link" : undefined}
              >
                <ChevronLeftIcon size={16} aria-hidden="true" />
              </PaginationLink>
            </PaginationItem>

            {/* Left ellipsis (...) */}
            {showLeftEllipsis && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* Page number links */}
            {pages.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href={`#/page/${page}`}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Right ellipsis (...) */}
            {showRightEllipsis && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* Next page button */}
            <PaginationItem>
              <PaginationLink
                className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
                href={
                  currentPage === totalPages
                    ? undefined
                    : `#/page/${currentPage + 1}`
                }
                aria-label="Go to next page"
                aria-disabled={currentPage === totalPages ? true : undefined}
                role={currentPage === totalPages ? "link" : undefined}
              >
                <ChevronRightIcon size={16} aria-hidden="true" />
              </PaginationLink>
            </PaginationItem>

            {/* Last page button */}
            <PaginationItem>
              <PaginationLink
                className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
                href={
                  currentPage === totalPages
                    ? undefined
                    : `#/page/${totalPages}`
                }
                aria-label="Go to last page"
                aria-disabled={currentPage === totalPages ? true : undefined}
                role={currentPage === totalPages ? "link" : undefined}
              >
                <ChevronLastIcon size={16} aria-hidden="true" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default NarrativeScreen;
