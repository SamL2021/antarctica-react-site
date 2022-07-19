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
                            text="Woke up at 5:30 am so almost changed time zones, coffee at Azure. Breakfast in the yacht club. Stretch before more briefings, decided we'd like to experience the helicopter but skip the submarine. Hit the gym before lunch at Elements. Staff are super friendly, very impressed at the breadth of knowledge and all the regions the discovery team hail from. Woke with a sore eye, saw the on-baord doctor and prescribed drops. Dined on salmon for lunch at Elements, visited the spa had a 3 hour jet lag nap and then awesome sushi at Kokos for dinner (an authentic Japanese experience), probably drank a little too much which is easy to do with the free-flowing drinks."
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
                            text="Started the day in the gym just after 5, watched icebergs float by as the sun rose. By 9am we had boots on Antartica, followed by a R.A.T test (all the passengers were negative). 12pm we were wine tasting with the sommelier as the ship repositioned for the afternoons excursions. We went stand up paddleboarding with Jordan from Canada, using drysuits. What a unique adventure, we got so close to penguins and a crabeater seal, moving ice to paddle. After we went onto continental Antartica and walked almost amongst the penguins to have our photo taken with the Antarctica flag. Dinner was at Elements, the main dining venue offering a wide variety of Italian cuisine, steak and seafood."
                            wildlife="Wildlife: Chinstrap and Gentoo penguins, Antarctic shag and comorant. Crabeater seal and minke whale"
                        />
                    </ul>

                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 5 ~ Antarctica, 15th March 2022"
                            excursion="Excursion: Helicopter Ride!"
                            text="Today we slept until almost 7am, watched another seal playing by the ice before a leisurely breakfast in the Yacht Club, then our first adventure of the day was a helicopter ride and wow did it give us perspective on how HUGE Antarctica is! We had a zodiac cruise where we saw a leopard seal, she was really interested in us and swam around the boat several times, just as we left she popped up right below my husband and opened her mouth in almost a warning, we thought she might jump aboard. We then had another landing in the afternoon where we saw fur seals, a weddell seal, a whale bone grave yard and lots of gentoo penguins and then then we went back for the polar plunge!
                            The water temperature was -1.2 degrees and on land -5 degrees. It was snowing as we waited then once we jumped (my husband and I holding hands) I saw this incredible colour from below, the purple blue then the aqua but the cold was so intense I forgot how to breath, how to swim, how to think. Only in the water for a matter of seconds it was overwhelming, a great experience but also a reminder of the fragility of life. After several shots and a few hours in the jacuzzi we felt human again. Another amazing dinner in Koko's, the Asian Fusion restuarant."
                            wildlife="Wildlife: Weddell, fur and leopard seals"
                        />
                    </ul>
                    <ul className="diary__entries__items">
                        <DiaryItem
                            title="Day 6 ~ At Sea, 16th March 2022"
                            excursion=""
                            text="
                            Today we are headed towards Elephant Island. The conditions are wild, somewhere around a Force 10: Storm on the Beaufort wind scale, with 12 being a Hurricane. The outside temp of -4.5 degrees with winds of 48-50 knots or approximately 90kms/hr
                            We have planned for a relaxing day today, making the most of the opportunity to relax on our holiday, the ship is handling the conditions extremely well and as long as we take our sea sickness medication we are able to enjoy the experience though the same cannot be said for all on-board."
                            wildlife="Wildlife: A bubbling ocean of Fin whales feeding"
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
                        bit of everyehing including freshly made waffles and
                        even delicious lamb chops and mimosas. The sun was
                        shining today and we enjoyed some jacuzzi time. Excited
                        to get to South Georgia. Tonight dined in the
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
                            text="Landed at South Georgia, thousands of king penuins,
                        elephant seals. Kayaking, leopard seals, fur seals and
                        macaroni penguins followed by a jacuzzi in the snow.
                        Then the Grytviken Fjords."
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
                        island that can be xplored. St Andrews Bay, meanwhile,
                        is home to one of the world' biggest King penguin
                        colonies. Estimated at approximately 300,000 penguins on
                        our day of arrival. Visited Shakeltons grave, hiked into the South Georgia interior. Visited the whaling station, museam. Felt a
                        fur seal and king penguin pelt, was chased by baby seals
                        and send my nephews a post card from the end of the
                        earth. Won the daily trivia with our 'Cool' crew team!"
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
                        As we sailed for lunch we saw humpback whales lung
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
                            text="Today we had our last close encounters with the King
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

                    {/* <ul className="diary__entries__items">
                        <DiaryItem title="" excursion="" text="" wildlife="" />
                    </ul>
                     */}
                </div>
            </div>
        </div>
    );
}

export default DiaryEntries;
