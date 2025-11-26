import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const blogPosts = [
  {
    title: "Avoid These Costly Mistakes When Renting a Supercar in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759480328225.webp",
    link: "/blog/avoid-these-costly-mistakes-when-renting-a-supercar-in-dubai"
  },
  {
    title: "Dubai Luxury Car Rentals: 10 Tips for a Smooth Experience",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759480781566.webp",
    link: "/blog/dubai-luxury-car-rentals-10-tips-for-a-smooth-experience"
  },
  {
    title: "What Paperwork Is Needed to Rent a Car in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759481969115.webp",
    link: "/blog/what-paperwork-is-needed-to-rent-a-car-in-dubai"
  },
  {
    title: "Dubai Luxury Car Rentals: Best Times to Book",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482241314.webp",
    link: "/blog/dubai-luxury-car-rentals-best-times-to-book"
  },
  {
    title: "When to Rent a Luxury Car in Dubai for the Best Experience",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482284288.webp",
    link: "/blog/when-to-rent-a-luxury-car-in-dubai-for-the-best-experience"
  },
  {
    title: "Dubai Car Rentals with Zero Deposit: What to Know",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482482152.webp",
    link: "/blog/dubai-car-rentals-with-zero-deposit-what-to-know"
  },
  {
    title: "Tips for Finding the Best Supercar Rental Deals in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482542343.webp",
    link: "/blog/tips-for-finding-the-best-supercar-rental-deals-in-dubai"
  },
  {
    title: "What to Know Before Renting a Premium Car in the UAE",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482590831.webp",
    link: "/blog/what-to-know-before-renting-a-premium-car-in-the-uae"
  },
  {
    title: "How to Pick the Best Luxury Car for Your Trip to Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482661888.webp",
    link: "/blog/how-to-pick-the-best-luxury-car-for-your-trip-to-dubai"
  },
  {
    title: "Why Choosing a Luxury Car Rental is Smarter Than a Taxi in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482710028.webp",
    link: "/blog/why-choosing-a-luxury-car-rental-is-smarter-than-a-taxi-in-dubai"
  },
  {
    title: "Luxury Car Rental in Dubai: A Beginner's Step-by-Step Guide",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482754672.webp",
    link: "/blog/luxury-car-rental-in-dubai-a-beginners-stepbystep-guide"
  },
  {
    title: "Dubai Supercar Rental: Mistakes You Shouldn't Make",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482846016.webp",
    link: "/blog/dubai-supercar-rental-mistakes-you-shouldnt-make"
  },
  {
    title: "10 Expert Tips for a Hassle-Free Luxury Car Rental in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482894334.webp",
    link: "/blog/10-expert-tips-for-a-hasslefree-luxury-car-rental-in-dubai"
  },
  {
    title: "Key Documents Needed to Rent a Car in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759482939866.webp",
    link: "/blog/key-documents-needed-to-rent-a-car-in-dubai"
  },
  {
    title: "Best Periods of the Year to Drive a Luxury Car in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483030034.webp",
    link: "/blog/best-periods-of-the-year-to-drive-a-luxury-car-in-dubai"
  },
  {
    title: "The Best Seasons to Rent a Luxury Car in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483095343.webp",
    link: "/blog/the-best-seasons-to-rent-a-luxury-car-in-dubai"
  },
  {
    title: "Zero-Deposit Car Rentals: What You Should Know",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483141778.webp",
    link: "/blog/zerodeposit-car-rentals-what-you-should-know"
  },
  {
    title: "How to Find the Best Price for Supercar Rentals in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483196063.webp",
    link: "/blog/how-to-find-the-best-price-for-supercar-rentals-in-dubai"
  },
  {
    title: "The Right and Wrong Way to Rent Luxury Cars in the UAE",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483272613.webp",
    link: "/blog/the-right-and-wrong-way-to-rent-luxury-cars-in-the-uae"
  },
  {
    title: "Find the Perfect Luxury Car for Your Dubai Vacation",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483354013.webp",
    link: "/blog/find-the-perfect-luxury-car-for-your-dubai-vacation"
  },
  {
    title: "Top Reasons to Rent a Luxury Car Instead of Taking a Taxi in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483398397.webp",
    link: "/blog/top-reasons-to-rent-a-luxury-car-instead-of-taking-a-taxi-in-dubai"
  },
  {
    title: "How to Rent a Luxury Vehicle in Dubai: A Step-by-Step Approach",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483533826.webp",
    link: "/blog/how-to-rent-a-luxury-vehicle-in-dubai-a-stepbystep-approach"
  },
  {
    title: "Common Mistakes to Avoid When Renting a Supercar in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483774806.webp",
    link: "/blog/common-mistakes-to-avoid-when-renting-a-supercar-in-dubai-1"
  },
  {
    title: "Luxury Car Rentals in Dubai: 10 Tips for a Smooth Experience",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759483915579.webp",
    link: "/blog/luxury-car-rentals-in-dubai-10-tips-for-a-smooth-experience"
  },
  {
    title: "A Checklist of Documents Needed to Rent a Car in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759484132350.webp",
    link: "/blog/a-checklist-of-documents-needed-to-rent-a-car-in-dubai"
  },
  {
    title: "When Is the Best Time to Rent a Luxury Car in Dubai?",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759484168750.webp",
    link: "/blog/when-is-the-best-time-to-rent-a-luxury-car-in-dubai"
  },
  {
    title: "A Complete Guide to Zero Deposit Car Rentals",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759484212478.webp",
    link: "/blog/a-complete-guide-to-zero-deposit-car-rentals"
  },
  {
    title: "Essential Do's and Don'ts for Renting Luxury Cars in the UAE",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759484300860.webp",
    link: "/blog/essential-dos-and-donts-for-renting-luxury-cars-in-the-uae"
  },
  {
    title: "Tips for Choosing the Perfect Luxury Car for Your Dubai Vacation",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759484368457.webp",
    link: "/blog/tips-for-choosing-the-perfect-luxury-car-for-your-dubai-vacation"
  },
  {
    title: "Renting a Luxury Car in Dubai: A Smarter Choice Than Taking a Taxi",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759484444908.webp",
    link: "/blog/renting-a-luxury-car-in-dubai-a-smarter-choice-than-taking-a-taxi"
  },
  {
    title: "The Ultimate Guide to Renting a Luxury Vehicle in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485352310.webp",
    link: "/blog/the-ultimate-guide-to-renting-a-luxury-vehicle-in-dubai"
  },
  {
    title: "Avoid These Mistakes When Renting a Supercar in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485427573.webp",
    link: "/blog/avoid-these-mistakes-when-renting-a-supercar-in-dubai"
  },
  {
    title: "Top 10 Tips for Renting a Luxury Car in  Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485507309.webp",
    link: "/blog/top-10-tips-for-renting-a-luxury-car-in-dubai"
  },
  {
    title: "Essential Documents Required for Renting a Car in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485544559.webp",
    link: "/blog/essential-documents-required-for-renting-a-car-in-dubai"
  },
  {
    title: "Best Times of Year to Rent a Luxury Car in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485593735.webp",
    link: "/blog/best-times-of-year-to-rent-a-luxury-car-in-dubai"
  },
  {
    title: "How to Get the Best Deal on a Supercar Rental in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485635574.webp",
    link: "/blog/how-to-get-the-best-deal-on-a-supercar-rental-in-dubai"
  },
  {
    title: "The Do's and Don'ts of Renting High-End Cars in the UAE",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485667070.webp",
    link: "/blog/the-dos-and-donts-of-renting-highend-cars-in-the-uae"
  },
  {
    title: "How to Choose the Right Luxury Car for Your Dubai Vacation",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485734690.webp",
    link: "/blog/how-to-choose-the-right-luxury-car-for-your-dubai-vacation"
  },
  {
    title: "Why Renting a Luxury Car is Better Than Taking a Taxi in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485769855.webp",
    link: "/blog/why-renting-a-luxury-car-is-better-than-taking-a-taxi-in-dubai"
  },
  {
    title: "Step-by-Step Guide to Renting a Luxury Vehicle in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485919975.webp",
    link: "/blog/stepbystep-guide-to-renting-a-luxury-vehicle-in-dubai"
  },
  {
    title: "Common Mistakes to Avoid When Renting a Supercar in Dubai",
    imageUrl: "https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759485958443.webp",
    link: "/blog/common-mistakes-to-avoid-when-renting-a-supercar-in-dubai"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Banner Section */}
        <section className="relative w-full h-[400px] sm:h-[400px] md:h-[400px] lg:h-[400px] overflow-hidden mx-auto">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://www.mkvluxury.com/_next/image?url=%2Fassets%2Fbanner-blog.webp&w=3840&q=75)',
              backgroundPosition: 'center'
            }}
          >
            {/* Optional Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
          </div>
          
          {/* Blog Text Overlay */}
          <div className="absolute h-full flex items-center justify-center px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-16">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-4xl font-bold text-black">
              Blog
            </h1>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="max-w-[2000px] mx-auto p-10">
          {/* Top Section - Featured + 2 Small Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Featured Large Post */}
            <div className="mb-6 md:mb-0 h-full">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  alt="How to Get the Best Deal on a Supercar Rental in Dubai UAE" 
                  loading="lazy" 
                  width="1920" 
                  height="1080" 
                  decoding="async" 
                  className="w-full h-[420px] object-cover" 
                  src="https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759479543924.webp" 
                  style={{color: 'transparent'}}
                />
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                  <h2 className="text-white font-bold text-2xl mb-3">How to Get the Best Deal on a Supercar Rental in Dubai UAE</h2>
                  <Link className="text-yellow-400 font-bold no-underline flex items-center" to="/blog/how-to-get-the-best-deal-on-a-supercar-rental-in-dubai-uae">
                    READ MORE 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - 2 Small Posts */}
            <div>
              <div className="grid grid-cols-1">
                {/* Small Post 1 */}
                <div className="mb-6 last:mb-0">
                  <div className="flex rounded-xl shadow-xl h-full overflow-hidden">
                    <img 
                      alt="Know Everything About Zero Deposit Car Rentals" 
                      loading="lazy" 
                      width="1920" 
                      height="1080" 
                      decoding="async" 
                      className="w-2/5 h-[200px] object-cover" 
                      src="https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759479955460.webp" 
                      style={{color: 'transparent'}}
                    />
                    <div className="p-4 flex flex-col">
                      <h5 className="font-bold text-left text-lg mb-3">Know Everything About Zero Deposit Car Rentals</h5>
                      <Link className="text-yellow-400 font-bold no-underline mt-auto flex items-center" to="/blog/know-everything-about-zero-deposit-car-rentals">
                        READ MORE 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 mb-1" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Small Post 2 */}
                <div className="mb-6 last:mb-0">
                  <div className="flex rounded-xl shadow-xl h-full overflow-hidden">
                    <img 
                      alt="Top 5 Scenic Driving Routes in Dubai for Supercars" 
                      loading="lazy" 
                      width="1920" 
                      height="1080" 
                      decoding="async" 
                      className="w-2/5 h-[200px] object-cover" 
                      src="https://server.supercarexperiencedubai.com/uploads/articles/article_banner_1759480253440.webp" 
                      style={{color: 'transparent'}}
                    />
                    <div className="p-4 flex flex-col">
                      <h5 className="font-bold text-left text-lg mb-3">Top 5 Scenic Driving Routes in Dubai for Supercars</h5>
                      <Link className="text-yellow-400 font-bold no-underline mt-auto flex items-center" to="/blog/top-5-scenic-driving-routes-in-dubai-for-supercars">
                        READ MORE 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 mb-1" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid - Multiple Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <div key={index} className="flex flex-col md:flex-row rounded-xl shadow-xl h-full overflow-hidden">
                <img 
                  alt={post.title} 
                  loading="lazy" 
                  width="1920" 
                  height="1080" 
                  decoding="async" 
                  className="w-full md:w-2/5 h-[200px] object-cover" 
                  src={post.imageUrl} 
                  style={{color: 'transparent'}}
                />
                <div className="p-4 flex flex-col justify-between">
                  <h5 className="font-bold text-left text-lg mb-3">{post.title}</h5>
                  <Link className="text-yellow-400 font-bold no-underline mt-auto flex items-center" to={post.link}>
                    READ MORE 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

