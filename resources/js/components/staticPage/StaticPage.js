import BicharList from "../../components/blog/BicharList";
import SahityaPati from "../../components/blog/SahityaPati";
import Ad280 from "../../components/common/ads/ad-280x480";
import { Link } from "react-router-dom";
import React from "react";

const StaticPage = () => {
  return (
    <div className="container">
      <section className="section content-editor static-page col-md-10 offset-md-2">
        <span className="news-big-title">विज्ञापन दर</span>

        <div className="row authors-box">
          <div className="share-box col-md-12">
            <div className="share-now sharethis-inline-share-buttons"></div>
          </div>
        </div>

        <div className="full-ad col-md-12">
          <Link to="/#!">
            <a title="">
              <img src="http://via.placeholder.com/825x100" alt="" />
            </a>
          </Link>
        </div>
      </section>

      <div className="row">
        <aside className="left-side col-sm-8 col-md-9">
          <div className="row">
            <div className="detail-box col-md-12">
              <div className="editor-box">
                <p>
                  दुइटा नागरिकता विवादमा परेका प्रधानन्यायाधीश गोपाल पराजुलीसँग
                  एसएलसी प्रमाणपत्र पनि दुइटै रहेको प्रमाण सेतोपाटीलाई प्राप्त
                  भएको छ। तीमध्ये कम्तिमा एउटा किर्ते बनाएको देखिन्छ।
                </p>
                <p>
                  प्रधानन्यायाधीश पराजुलीको नागारिकता र शैक्षिक प्रमाणपत्र विवाद
                  धैरै अघिदेखि ‍चल्दै आए पनि अहिले यो विषय सर्वोच्च अदालतकै
                  छानबिन दायरामा छ।
                </p>
                <p>
                  डा. गोविन्द केसीविरुद्ध अवहेलना मुद्दा{" "}
                  <strong>सुनुवाइपछि सर्वोच्च अदालतले&nbsp;पराजुलीका </strong>
                  नागरिकता र शैक्षिक प्रमाणपत्र झिकाउन आदेश दिएको
                  छ।&nbsp;अदालतको छानबिनमा बल पुगोस् भनेर केही सातादेखि{" "}
                  <em>सेतोपाटी</em>ले पराजुलीका शैक्षिक प्रमाणपत्र निरन्तर खोजी
                  गरिरहेको छ। खोजी क्रममा उनीसँग एसएलसीका दुइटा प्रमाणपत्र रहेको
                  तथ्य खुलेको हो।
                </p>
                <p>
                  पराजुलीको उमेर, शैक्षिक प्रमाणपत्र र नागरिकतासँग जोडिएको मुख्य
                  प्रश्न उनले कुन{" "}
                  <em>
                    विद्यालयबाट एसएलसी पास गरेका हुन् र एसएलसी पास गर्दा
                    विद्यालय रेकर्डमा{" "}
                  </em>
                  उनको उमेर कति थियो भन्ने हो। एसएलसी प्रमाणपत्रमा पराजुलीको जे
                  उमेर छ, सिद्दान्तत: त्यही उमेर{" "}
                  <u>
                    त्यसपछिका शैक्षिक प्रमाणपत्रमा कायम रहन्छ। नागरिकतामा पनि
                    एसएलसी पढ्दाकै
                  </u>{" "}
                  उमेर रहन्छ। यस्तो हुन्थ्यो भने उनको उमेर विवादमा पर्ने थिएन।
                  सतहमा उनको नागरिकताको उमेरमा विवाद देखिए पनि मूल विषय{" "}
                  <Link to="/#!">
                    <a title="">
                      शैक्षिक प्रमाणपत्रमा रहेका फरक उमेर हुन्। अझ एक तह गहिरिएर
                    </a>
                  </Link>{" "}
                  हेर्ने हो भने, उनका शैक्षिक प्रमाणपत्र सही हुन् वा नक्कली
                  भन्ने मूल विषय हो।
                </p>

                <p>
                  घर्ती सभामुखमा निर्वाचित हुने लगभग निाश्चित छ। दुई वाम दलबीच
                  सो प्रदेशमा एमालेले मुख्यमन्त्री र माओवादी केन्द्रले सभामुख
                  पाउने भागबन्डा भइसकेको छ। प्रदेशको उपसभामुख पनि एमालेको भागमा
                  परेको छ। एमालेले उम्मेदवार भने टुंग्याइसकेको छैन। सोहीअनुरुप
                  माओवादीको समर्थनमा एमालेका शंकर पोखरेलले मुख्यमन्त्रीमा दाबी
                  गर्दै प्रदेश प्रमुखलाई पत्र पनि पठाइसकेका छन्। प्रदेश नम्बर ५
                  को सभामुखको चुनाव फागुन २ गते हुँदैछ।
                </p>
              </div>
            </div>
          </div>

          <div className="row bottom-ad">
            <div className="full-ad col-md-12">
              <Link to="/#!">
                <a title="">
                  <img src="http://via.placeholder.com/825x100" alt="" />
                </a>
              </Link>
            </div>
          </div>

          <div className="row sponsored-ad">
            <div className="col-md-12">
              <p>Embed Taboola sponsored ad goes here</p>
            </div>
          </div>
        </aside>

        <div className="right-side innerpages col-sm-4 col-md-3">
          <div className="items adbox">
            <Ad280 />
          </div>

          <div className="items bichar">
            <BicharList />
          </div>

          <div className="items bichar">
            {/* @include ('frontend.partials.blog') */}
          </div>

          <div className="items bichar">
            <SahityaPati />
          </div>
          <div className="items adbox">
            <Ad280 />
          </div>

          <div className="items bichar">
            {/* @include ('frontend.partials.pathak-bichar') */}
          </div>
          <div className="items adbox">
            <Ad280 />
          </div>

          <div className="items adbox">
            <Ad280 />
          </div>
          <div className="items adbox">
            <Ad280 />
          </div>

          <div className="items suchanapati">
            {/*  @include ('frontend.partials.suchanapati') */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticPage;
