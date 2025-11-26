import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { getBlogPostBySlug } from "../data/blogPosts";

// Keep this array for Blog component compatibility (if needed)
const allBlogPosts = [
  {
    title: "How to Get the Best Deal on a Supercar Rental in Dubai UAE",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759479543924.webp",
    link: "/blog/how-to-get-the-best-deal-on-a-supercar-rental-in-dubai-uae",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Know Everything About Zero Deposit Car Rentals",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759479955460.webp",
    link: "/blog/know-everything-about-zero-deposit-car-rentals",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Top 5 Scenic Driving Routes in Dubai for Supercars",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759480253440.webp",
    link: "/blog/top-5-scenic-driving-routes-in-dubai-for-supercars",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Avoid These Costly Mistakes When Renting a Supercar in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759480328225.webp",
    link: "/blog/avoid-these-costly-mistakes-when-renting-a-supercar-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Dubai Luxury Car Rentals: 10 Tips for a Smooth Experience",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759480781566.webp",
    link: "/blog/dubai-luxury-car-rentals-10-tips-for-a-smooth-experience",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "What Paperwork Is Needed to Rent a Car in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759481969115.webp",
    link: "/blog/what-paperwork-is-needed-to-rent-a-car-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Dubai Luxury Car Rentals: Best Times to Book",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482241314.webp",
    link: "/blog/dubai-luxury-car-rentals-best-times-to-book",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "When to Rent a Luxury Car in Dubai for the Best Experience",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482284288.webp",
    link: "/blog/when-to-rent-a-luxury-car-in-dubai-for-the-best-experience",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Dubai Car Rentals with Zero Deposit: What to Know",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482482152.webp",
    link: "/blog/dubai-car-rentals-with-zero-deposit-what-to-know",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Tips for Finding the Best Supercar Rental Deals in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482542343.webp",
    link: "/blog/tips-for-finding-the-best-supercar-rental-deals-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "What to Know Before Renting a Premium Car in the UAE",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482590831.webp",
    link: "/blog/what-to-know-before-renting-a-premium-car-in-the-uae",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "How to Pick the Best Luxury Car for Your Trip to Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482661888.webp",
    link: "/blog/how-to-pick-the-best-luxury-car-for-your-trip-to-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Why Choosing a Luxury Car Rental is Smarter Than a Taxi in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482710028.webp",
    link: "/blog/why-choosing-a-luxury-car-rental-is-smarter-than-a-taxi-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Luxury Car Rental in Dubai: A Beginner's Step-by-Step Guide",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482754672.webp",
    link: "/blog/luxury-car-rental-in-dubai-a-beginners-stepbystep-guide",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Dubai Supercar Rental: Mistakes You Shouldn't Make",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482846016.webp",
    link: "/blog/dubai-supercar-rental-mistakes-you-shouldnt-make",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "10 Expert Tips for a Hassle-Free Luxury Car Rental in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482894334.webp",
    link: "/blog/10-expert-tips-for-a-hasslefree-luxury-car-rental-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Key Documents Needed to Rent a Car in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482939866.webp",
    link: "/blog/key-documents-needed-to-rent-a-car-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Best Periods of the Year to Drive a Luxury Car in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483030034.webp",
    link: "/blog/best-periods-of-the-year-to-drive-a-luxury-car-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "The Best Seasons to Rent a Luxury Car in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483095343.webp",
    link: "/blog/the-best-seasons-to-rent-a-luxury-car-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Zero-Deposit Car Rentals: What You Should Know",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483141778.webp",
    link: "/blog/zerodeposit-car-rentals-what-you-should-know",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "How to Find the Best Price for Supercar Rentals in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483196063.webp",
    link: "/blog/how-to-find-the-best-price-for-supercar-rentals-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "The Right and Wrong Way to Rent Luxury Cars in the UAE",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483272613.webp",
    link: "/blog/the-right-and-wrong-way-to-rent-luxury-cars-in-the-uae",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Find the Perfect Luxury Car for Your Dubai Vacation",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483354013.webp",
    link: "/blog/find-the-perfect-luxury-car-for-your-dubai-vacation",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Top Reasons to Rent a Luxury Car Instead of Taking a Taxi in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483398397.webp",
    link: "/blog/top-reasons-to-rent-a-luxury-car-instead-of-taking-a-taxi-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "How to Rent a Luxury Vehicle in Dubai: A Step-by-Step Approach",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483533826.webp",
    link: "/blog/how-to-rent-a-luxury-vehicle-in-dubai-a-stepbystep-approach",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Common Mistakes to Avoid When Renting a Supercar in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483774806.webp",
    link: "/blog/common-mistakes-to-avoid-when-renting-a-supercar-in-dubai-1",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Luxury Car Rentals in Dubai: 10 Tips for a Smooth Experience",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483915579.webp",
    link: "/blog/luxury-car-rentals-in-dubai-10-tips-for-a-smooth-experience",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "A Checklist of Documents Needed to Rent a Car in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759484132350.webp",
    link: "/blog/a-checklist-of-documents-needed-to-rent-a-car-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "When Is the Best Time to Rent a Luxury Car in Dubai?",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759484168750.webp",
    link: "/blog/when-is-the-best-time-to-rent-a-luxury-car-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "A Complete Guide to Zero Deposit Car Rentals",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759484212478.webp",
    link: "/blog/a-complete-guide-to-zero-deposit-car-rentals",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Essential Do's and Don'ts for Renting Luxury Cars in the UAE",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759484300860.webp",
    link: "/blog/essential-dos-and-donts-for-renting-luxury-cars-in-the-uae",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Tips for Choosing the Perfect Luxury Car for Your Dubai Vacation",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759484368457.webp",
    link: "/blog/tips-for-choosing-the-perfect-luxury-car-for-your-dubai-vacation",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Renting a Luxury Car in Dubai: A Smarter Choice Than Taking a Taxi",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759484444908.webp",
    link: "/blog/renting-a-luxury-car-in-dubai-a-smarter-choice-than-taking-a-taxi",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "The Ultimate Guide to Renting a Luxury Vehicle in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485352310.webp",
    link: "/blog/the-ultimate-guide-to-renting-a-luxury-vehicle-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Avoid These Mistakes When Renting a Supercar in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485427573.webp",
    link: "/blog/avoid-these-mistakes-when-renting-a-supercar-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Top 10 Tips for Renting a Luxury Car in  Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485507309.webp",
    link: "/blog/top-10-tips-for-renting-a-luxury-car-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Essential Documents Required for Renting a Car in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485544559.webp",
    link: "/blog/essential-documents-required-for-renting-a-car-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Best Times of Year to Rent a Luxury Car in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485593735.webp",
    link: "/blog/best-times-of-year-to-rent-a-luxury-car-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "How to Get the Best Deal on a Supercar Rental in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485635574.webp",
    link: "/blog/how-to-get-the-best-deal-on-a-supercar-rental-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "The Do's and Don'ts of Renting High-End Cars in the UAE",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485667070.webp",
    link: "/blog/the-dos-and-donts-of-renting-highend-cars-in-the-uae",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "How to Choose the Right Luxury Car for Your Dubai Vacation",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485734690.webp",
    link: "/blog/how-to-choose-the-right-luxury-car-for-your-dubai-vacation",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Why Renting a Luxury Car is Better Than Taking a Taxi in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485769855.webp",
    link: "/blog/why-renting-a-luxury-car-is-better-than-taking-a-taxi-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Step-by-Step Guide to Renting a Luxury Vehicle in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485919975.webp",
    link: "/blog/stepbystep-guide-to-renting-a-luxury-vehicle-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  },
  {
    title: "Common Mistakes to Avoid When Renting a Supercar in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485958443.webp",
    link: "/blog/common-mistakes-to-avoid-when-renting-a-supercar-in-dubai",
    date: "July 21, 2025",
    author: "MKV Luxury"
  }
];

export default function BlogPost() {
  const { slug } = useParams();
  // Load blog post by slug from data file - each blog has unique content
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#2c3e50] mb-4">Post Not Found</h1>
            <p className="text-lg text-[#475569] mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-[#df8c0c] font-semibold hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Banner Section */}
        <section className="relative w-full h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${post.imageUrl})`,
              backgroundPosition: 'center'
            }}
          >
            
            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] inset-0 flex items-center bg-black/60"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-16">
            <div className="max-w-6xl ">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-lg text-sm sm:text-[13px] font-semibold">
                  {post.date || "July 21, 2025"}
                </span>
                <span className="text-white text-sm sm:text-base font-medium">
                  By {post.author || "MKV Luxury"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content Section */}
        <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="p-8 max-md:p-6 rounded-lg overflow-hidden bg-white border border-gray-200">
              <div className="p-6">
                <div className="text-slate-700 mb-0 text-[18px] description-styles blog-content prose max-w-none space-y-6">
                  {post && post.fullContent ? (
                    <div dangerouslySetInnerHTML={{ __html: post.fullContent }} />
                  ) : (
                    <div>
                      <p className="text-black mb-6 leading-relaxed tracking-wide">
                        Content for this blog post is not available. Please check back later.
                      </p>
                    </div>
                  )}
                </div>
              </div>
             
            </div>
            <div className="blog-meta-tags mt-6 flex flex-wrap items-center gap-2">
                <span className="bg-gray-800 text-white text-sm font-medium px-2.5 py-0.5 rounded-full me-2 mb-2">
                  {post.date || "July 11, 2025"}
                </span>
                <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded mb-2">
                  Published
                </span>
              </div>

            {/* Back to Blog Link */}
            <div className="mt-6">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-[#df8c0c] font-semibold hover:underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

