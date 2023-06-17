import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [navbarColor, setNavbarColor] = useState('transparent');
    const [navbarVisible, setNavbarVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
    
          if (scrollTop > 50) {
            setNavbarColor('#fff'); // Change the color to your desired value
            setNavbarVisible(true);
          } else {
            setNavbarColor('transparent');
            setNavbarVisible(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  return (
    <>
      <header className="flex flex-col sticky top-0 z-50">
        <div className={`navbar ${navbarVisible ? 'navbar-visible sticky' : ''}`}
      style={{ backgroundColor: navbarColor }}>
          <div className="max-w-6xl mx-auto py-8">
            <nav className='sticky top-0 left-0 z-50'>
              <div className="flex justify-between items-center px-2">
                <div className="logo">logo</div>

                <ul className="hidden md:flex gap-10">
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link>Shop</Link>
                  </li>
                  <li>
                    <Link>About</Link>
                  </li>
                  <li>
                    <Link>Blog</Link>
                  </li>
                </ul>

                <button>Profile</button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
