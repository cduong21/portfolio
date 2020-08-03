import Link from 'next/link';

const HeaderNav = () => {
    return(
<div className="container">
<div className="name"> <Link href="/"><a>Cindy Duong</a></Link></div>

      <div className="navigations">
        <ul>
          <li><Link href="/"><a>About</a></Link></li>
          <li><Link href="/Code"><a>Code</a></Link></li>
        </ul>
      </div>
      <style jsx>{`
        .container {
          margin-bottom: 2rem;
        }
        .name {
          font-size: 30px;
          padding: 1.5rem;
        }
        ul {
          list-style-type: none;
          text-align: right;
        }
        li {
          margin: 2rem 1rem;
        }
      `}</style>
</div>
    )
}

export default HeaderNav;
