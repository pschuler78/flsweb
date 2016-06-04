function renderWithId(idName, labelName) {
    return (data, escape) => {
        return '<div class="option">' +
            escape(data[idName]) + ' - ' + escape(data[labelName]) +
            '</div>';
    }
}

export default class DropdownItemsRenderService {

    personRenderer() {
        function renderPerson(person, escape) {
            return '<div class="option">' + escape(person.Firstname) + ' ' +
                escape(person.Lastname) +
                (person.City ? ' (' + escape(person.City) + ')' : '') +
                '</div>';
        }

        return {
            option: renderPerson,
            item: renderPerson
        };
    }

    starttypeRenderer() {
        return {
            option: renderWithId('StartTypeId', 'StartTypeName'),
            item: renderWithId('StartTypeId', 'StartTypeName')
        };
    }

    flighttypeRenderer() {
        return {
            option: renderWithId('FlightCode', 'FlightTypeName'),
            item: renderWithId('FlightCode', 'FlightTypeName')
        };
    }

    aircraftRenderer() {
        function seatLabel(NrOfSeats) {
            return ' Seat' + ((NrOfSeats > 1) ? 's' : '');
        }

        function renderAircraft(aircraft, escape) {
            return '<div class="option">' + escape(aircraft.Immatriculation) +
                (aircraft.CompetitionSign ? ' [' + escape(aircraft.CompetitionSign) + ']' : '') +
                (aircraft.AircraftModel ? ' (' + escape(aircraft.AircraftModel) + ')' : '') +
                (aircraft.NrOfSeats ? ' - ' + escape(aircraft.NrOfSeats) + seatLabel(aircraft.NrOfSeats) : '') +
                ' </div>';
        }

        return {
            option: renderAircraft,
            item: renderAircraft
        };
    }

    locationRenderer() {
        function renderLocation(location, escape) {
            return '<div class="option">' + escape(location.LocationName) +
                (location.IcaoCode ? ' (' + escape(location.IcaoCode) + ')' : '') +
                '</div>';
        }

        return {
            option: renderLocation,
            item: renderLocation
        };
    }

    userAccountStateRenderer() {
        function renderUserAccountState(accountState, escape) {
            return '<div class="option">' + escape(accountState.AccountStateName) + '</div>';
        }

        return {
            option: renderUserAccountState,
            item: renderUserAccountState
        };
    }

    clubRenderer() {
        function renderClub(club, escape) {
            return '<div class="option">' + escape(club.ClubName) + '</div>';
        }

        return {
            option: renderClub,
            item: renderClub
        };
    }

}