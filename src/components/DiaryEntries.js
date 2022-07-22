import React from "react";
import "./DiaryEntries.css";
import DiaryItem from "./DiaryItem";

function DiaryEntries() {
    return (
        <div className="diary__entries">
            <div className="diary__entries__container">
                <div className="diary__entries__wrapper">
                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 1 ~ At Sea, 11th March 2022"
                            text="Our day begins before dawn, traveling down from Buenos Aires. The flight is full of trepidation, no one can quite believe we've made it. After a final covid test we board the ship in Ushuaia. We are greeted with prosecco on arrival and given a private safety briefing for each cabin. After this we are taken to our suite 715, where a chilled bottle of champagne is awaiting. We start our trip with a self-guided exploration of the ship, on finding the beautiful spa we decide to spend some time there before the mandatory safety briefings. This was our only opportunity to sit in the spa overlooking the snow capped mountains. Exhausted we order room service to enjoy before departure, which we enjoy along with the rest of our champagne. Ben was asleep in minutes, the bed was amazing. During the night we entered the Drake Passage, with up to 6 metre swells.
                            The Drake Passage,  the reputed roughest sea-passage in the world is a deep waterway, 1000 km wide, connecting the Atlantic and Pacific oceans between Cape Horn (the southernmost point of South America) and the South Shetland Islands, situated about 160 km north of the Antarctic Peninsula. It is a most vivid blue, undertones of purple and an almost aqua in the wash of the ship. Giant seabirds like Albatross follow us, cruising behind making use of the updrafts and picking up small marine animals exposed from the choppy waves made by the ship."
                            wildlife="Wildlife: Albatross"
                        />
                    </ul>
                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 2 ~ At Sea, 12th March 2022"
                            text="Woke up at 5:30 am so almost changed time zones, coffee at Azure. Breakfast in the yacht club. Stretch before more briefings, decided we'd like to experience the helicopter but skip the submarine. Hit the gym before lunch at Elements. Staff are super friendly, very impressed at the breadth of knowledge and all the regions the discovery team hail from. Woke with a sore eye, saw the on-board doctor and was prescribed drops. Dined on salmon for lunch at Elements, visited the spa then had a 3 hour jet lag nap followed by awesome sushi at Kokos for dinner, probably drank a little too much which is easy to do with the free-flowing drinks."
                            wildlife="Wildlife: Petrels"
                        />
                    </ul>
                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 3 ~ At Sea, 13th March 2022"
                            text="Woke up at 4am, nap may have been the culprit or too many drinks. The sea is undulating with a thick mist cover. Sent a quote from my bed for a guest to visit a retreat in Thailand. Trying to remember to soak up all the moments and appreciate the experience, once in a lifetime. Had an incredible hot stone massage on-board."
                            wildlife="Wildlife: Humpback Whale"
                        />
                    </ul>
                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 4 ~ Antarctica, 14th March 2022"
                            excursion="Excursion: Paddle boarding."
                            text="Started the day in the gym just after 5am, watching icebergs float by as the sun rose. By 9am we had boots on Antartica, followed by a R.A.T test (all the passengers were negative). 12pm we were wine tasting with the sommelier as the ship repositioned for the afternoons excursions. We went stand up paddleboarding in drysuits with Jordan from Canada. What a unique adventure, we got so close to penguins and a crabeater seal, Jordan was moving the ice out of our ways so we could paddle. Following this we went onto continental Antartica and walked almost amongst the penguins to have our photo taken with the Antarctica flag. Dinner was at Elements, the main dining venue offering a wide variety of Italian cuisine, steak and seafood."
                            wildlife="Wildlife: Chinstrap and Gentoo penguins, Antarctic shag and comorant. Crabeater seal and minke whale"
                        />
                    </ul>

                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 5 ~ Antarctica, 15th March 2022"
                            excursion="Excursion: Helicopter Ride!"
                            text="Today we slept until almost 7am. We watched another seal playing by the ice from our balcony before a leisurely breakfast in the Yacht Club, then our first adventure of the day was a helicopter ride and wow did it give us perspective on how HUGE Antarctica is! We had a zodiac cruise where we saw a leopard seal up-close, she was really interested in us and swam around the boat several times, just as we left she popped up right below my husband and opened her mouth wide showing off her impressive teeth, we thought she might jump aboard. We then had another landing in the afternoon where we saw fur seals, a weddell seal, a whale bone grave yard and lots of gentoo penguins and then then we went back for the polar plunge!
                            The water temperature was -1.2 degrees and on land -5 degrees. It was snowing as we waited then once we jumped (my husband and I holding hands) I saw this incredible colour from below, the purple blue then the aqua but the cold was so intense I forgot how to breath, how to swim, how to think. Only in the water for a matter of seconds it was overwhelming, a great experience but also a reminder of the fragility of life. After several shots and a few hours in the jacuzzi we felt human again. Another amazing dinner in Koko's, the Asian Fusion restuarant."
                            wildlife="Wildlife: Weddell, fur and leopard seals"
                        />
                    </ul>
                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 6 ~ At Sea, 16th March 2022"
                            excursion=""
                            text="
                            Today we are headed towards Elephant Island. The conditions are wild, somewhere around a Force 10: Storm on the Beaufort wind scale (with 12 being a Hurricane). The outside temp is minus 4.5 degrees with winds of 48-50 knots or approximately 90kms/hr
                            We have planned for a relaxing day today, making the most of the opportunity to relax on our holiday, the ship is handling the conditions extremely well and as long as we take our sea sickness medication we are able to enjoy the experience though the same cannot be said for all on-board."
                            wildlife="Wildlife: A bubbling ocean of Fin whales in a feeding frenzy"
                        />
                    </ul>
                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 7 ~ At Sea, 17th March 2022"
                            excursion=""
                            text="Another covid test as we arrive into South Georga. Hoping for more whale watching opportunities today. Saw two huge icebergs in the night - incredible especially as it was a full moon and the captain orientated the ship so we could pass them close by and see them under the special ice lights."
                            wildlife="Wildlife: Bird and whale spotting on route"
                        />
                    </ul>

                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 8 ~ At Sea, 18th March 2022"
                            excursion=""
                            text="Started the day with breakfast in bed, we had a little
                        bit of everything including freshly made waffles and
                        even delicious lamb chops and mimosas. The sun was
                        shining today and we enjoyed some jacuzzi time. Excited
                        to get to South Georgia. Tonight we dined in the
                        contemporary French restaurant Lumiere, we celebrated
                        our friend Lisa's 50th birthday because we can, her
                        birthday is in September but you never know when you'll
                        miss a birthday in the pandemic world."
                            wildlife=""
                        />
                    </ul>

                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 9 ~ South Georgia, 19th March 2022 ~ Gold Harbour / Cooper Bay"
                            excursion="Excursion: Kayaking"
                            text="Landed at South Georgia, thousands of king penguins,
                        elephant seals. We went kayaking in the afternoon, we were in the water with three leopard seals at one point though our guides expertly navigated us along while the zodiacs kept an eye on them, lots of fur seals played in the water and up high on the mountain-side we spotted
                        macaroni penguins. Back on board we jumped in the jacuzzi as the snow fell upon us. Luckily the weather cleared and the captain took us into the Grytviken Fjords for an upclose look"
                            wildlife="Wildlife: King and Macaroni penguins. Elephant
                        and fur seals shared the beach with all of the huge sea birds."
                        />
                    </ul>

                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 10 ~ South Georgia, 20th March 2022 ~ Grytviken / Saint Andrews Bay"
                            excursion="Hiked into the South Georgia interior"
                            text="Today we visit Grytviken, the center of South Georgia's
                        whaling industry and the only whaling station on the
                        island that can be explored. St Andrews Bay, meanwhile,
                        is home to one of the world' biggest King penguin
                        colonies. Estimated at approximately 300,000 penguins on
                        our day of arrival. We had another big day, we visited Shakeltons grave, hiked into the South Georgia interior. Visited the whaling station post office and museum. In the museam we felt a
                        fur seal and king penguin pelt, we were also chased by baby seals
                        and sent my nephews a post card from the end of the
                        earth. Back on board we won the daily trivia with our 'Cool' crew team!"
                            wildlife="Wildlife: King penguins and fur seals galore!"
                        />
                    </ul>

                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 11 ~ South Georgia, 21st March 2022 ~ Stromness / Jason Harbour"
                            excursion=""
                            text="The official start of Autumn Equinox. Landed at Stromness in the morning, this is the whaling station that Ernest Shackleton, along with Frank Wilde and Tom Crean finally
                        returned to civilisation after crossing the unexplored
                        interior of South Georgia. The beach was covered in fur
                        seals and the fields too, we walked up to a waterfall a
                        couple of kms in where Shackleton and his men came down
                        almost 106 years before. We won the daily trivia again!
                        As we sailed for lunch we saw humpback whales lunge
                        feeding. In the afternoon we took a long, strenous hike
                        over Jason Harbour in the afternoon to a viewpoint. We
                        then enjoyed a soak in the jacuzzi before an early night
                        in with room service and a movie."
                            wildlife=""
                        />
                    </ul>

                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 12 ~ South Georgia, 22nd March 2022 ~ Salisbury Plain / Prince Olav Harbour"
                            excursion=""
                            text="Today we had our last close encounters with the king
                        penguins, this started with thousands of them playing in
                        the waters surrounding the boat, following us in and playing in the wake of the zodiac and then walking amongst them during our final landing
                        in South Georgia at Salisbury Plain. We dined at the Night market's @
                        Koko's - this is a private dining room with a Teppanyaki
                        grill and our chef, Strawberry was a delight."
                            wildlife="Wildlife: King penguins"
                        />
                    </ul>

                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 13 ~ South Georgia, 23rd March 2022 ~ South Atlantic Ocean"
                            excursion=""
                            text="Took the opportunity to relax and spend a day in our fantastic cabin, recharging the batteries after all our adventures and then had another lovely dining
                        experience and date night with my husband at the French
                        restuarant Lumiere"
                            wildlife=""
                        />
                    </ul>

                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 14 ~ At Sea, 24th March 2022 ~ South Atlantic Ocean"
                            excursion=""
                            text="We had a bumpy night overnight so started the day late,
                        joined my friend Louise for a light breakfast in Azure
                        before jumping online to update my diary entries, its amazing how much we have covered already - exploring places beyond our wildest imagination."
                            wildlife=""
                        />
                    </ul>

                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 15 ~ At Sea, 25th March 2022"
                            excursion=""
                            text="Lazy day at sea, recovering from drinks the night
                        before. We had a departure seminar and then a lovely
                        dinner at the yacht club. A speciality dinner with a fun
                        vibe, we enjoyed reminising about all the lovely staff
                        we had met at sea."
                            wildlife=""
                        />
                    </ul>

                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 16 ~ At Sea, 26th March 2022"
                            excursion=""
                            text=" We continue crossing the South Atlantic ocean towards
                        Montevideo, the capital of Uruguay. Wow what a
                        difference today, we woke to calm seas and temperatures
                        in the late teens. After pancakes in the yacht club and
                        some time at the gym for me and a haircut on-board for
                        Ben. We had ou last RAT test on-board, tomorrow we get a
                        PCR test! We staked out a sunny table on deck 5 behind
                        the Azure cafe and spent several hours watching the
                        world float by while enhoying lunch before some jacuzzi
                        and whale watching on the sun deck on level 10. Tonight
                        there is the Captains farewell cocktail function for
                        those departing and likely our final dinner at Koko's."
                            wildlife="Wildlife: Sperm whale"
                        />
                    </ul>

                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 17 ~ Uruguay, 27th March 2022"
                            excursion="The Ranch"
                            text="We had planned a romantic last breakfast in bed as we sailed into Uruguay before beginning the day but we were already moored up in the port when we woke, so we enjoyed in our room before our day
                        tour which was actually a real highlight. We went to a
                        working farm where we had a tour, I went on a horse
                        drawn buggy with a new friend Don. Our guide did not
                        speak any english so we made up the tour on our own. We
                        stopped by the river - so wide and spoke to the owners
                        son about kiteboarding. After this we had a lovely lunch
                        with lots of red wine and then Ben went on a 'magic
                        carpet' ride, being dragged across the land behind one
                        of the local ponies."
                            wildlife=""
                        />
                    </ul>

                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 18 ~ Uruguay, 28th March 2022"
                            excursion=""
                            text="Our final day on-board, we left early to fly to Rio via Sao Paulo though we missed our flight and it was like an episode of amazing races trying to get through the airport - we are certainly out of practice that is for sure. When we arrived in Rio we had a lovely dinner at MEE, the first luxury pan-Asian restaurant to open in Rio de Janeiro, Brazil, at the Copacabana Palace."
                            wildlife=""
                        />
                    </ul>

                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 19 ~ Rio, 29th March 2022"
                            excursion="Christ the Redeemer & Sugarloaf mountain"
                            text="Today we went to see the sights, I organised a driver
                        and guide through the hotel who took us up to see Christ
                        the redeemer, when we arrived the whole statue was
                        shrouded by clouds but we waited patiently for about 20
                        minutes and the skies opened up, the sun shone and we
                        could see for miles around. The tourists were great fun
                        to watch, waiting and trying to get their own special
                        moment even when there are so many people crowded
                        together. After this we went to sugar loaf Mountain,
                        this is up two steep cable cars but half way we stopped
                        and enjoyed an aperol spritz while looking back at
                        Christ the redemmer and over the beaches that Rio is
                        famous for. We had lunch at a restaurant previously
                        visited by Madonna and after a big day on our feet we
                        went back for a swim and then light dinner at the hotel.
                        Lisa and I also had our final PCR test for the trip."
                            wildlife=""
                        />
                    </ul>

                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 20 ~ Traveling, 30th March 2022"
                            excursion=""
                            text="Today we planned to relax before our long travels home,
                        my friend Lisa and I took some bikes from the hotel and
                        rode up and down the beach before we met Ben for a
                        leisurely breakfast, Lisa and I then went over for a
                        walk and swim at the beach. We all then spent the
                        afternoon by the pool enjoying the sunshine and more
                        spritz. We had to leave the hotel by 7pm to fly at 11pm."
                            wildlife=""
                        />
                    </ul>

                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 21 ~ Traveling, 31st March"
                            excursion=""
                            text="  We landed into Miami after an overnight flight and
                        parted ways with Ben as he stayed on for work, Lisa and
                        I spent some time in the lounge where I was able to
                        enjoy a shower before our connecting flight to Dallas.
                        We had the whole day in Dallas then flew back to Sydney
                        that night. I really enjoyed flying in Qantas Premium
                        Economy and slept for over 9 hours of the 16 hour flight
                        home ~ Bliss~"
                            wildlife=""
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DiaryEntries;
