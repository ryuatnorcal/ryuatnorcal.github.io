
"use client"
import Bio from '../../sections/Bio' 
import Intro from '../../sections/Intro'
import Tech from '../../sections/Tech'
import Experience from '../../sections/Experience';
import Footer from '../../sections/Footer'
import { FEATURE_FLAGS } from '../../consts'
import 'bootstrap/dist/css/bootstrap.min.css'

const PageContainer = () => {
  return (
    <div>
      <Intro enable={ FEATURE_FLAGS.enableIntro } />
      <Bio enable={ FEATURE_FLAGS.enableBio }/>
      <Tech enable={FEATURE_FLAGS.enableTech} />
      <Experience enable={ FEATURE_FLAGS.enableExperience} />
      <Footer enable={ FEATURE_FLAGS.enableFooter } />
    </div>
  );
}

export default PageContainer;
