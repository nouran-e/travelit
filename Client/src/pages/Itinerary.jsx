import AppHeader from '../components/AppHeader';
import TripHeader from '../components/Itinerary/TripHeader';
import ActivityContainer from '../components/Itinerary/ActivityContainer';

function Itinerary () {
    return (
        <>
        <AppHeader />
        <TripHeader tripText={'Safari Trip'} tripDate={'16 Jun to 18 March'} tripLocation={'Kenya, Mali, Zambia'}/>
        <ActivityContainer activityName={'Tree Adventures'} activityLocation={'Woodhill Forest'} activityStart={'12:00'} activityEnd={'1:00'}/>
    
        </>
    );  

}
export default Itinerary