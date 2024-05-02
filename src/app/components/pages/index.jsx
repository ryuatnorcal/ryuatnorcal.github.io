
"use client"
import Bio from '../../sections/Bio' 
import Intro from '../../sections/Intro'
import Tech from '../../sections/Tech'
import Experience from '../../sections/Experience';
import Footer from '../../sections/Footer'
import Moved from '@/app/sections/Moved';
import { FEATURE_FLAGS } from '../../consts'
import 'bootstrap/dist/css/bootstrap.min.css'

const PageContainer = () => {
  return (
    <div>
      <Moved />
    </div>
  );
}

export default PageContainer;
