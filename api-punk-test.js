import { check, sleep, group } from "k6";
import { GetBeersParameters } from "./api-punk/parameters/GetBeersParameters.js";
import { getBeers, getBeersWithoutParams } from "./api-punk/public.js";
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js';


export default function () {
    group('Get Beers with per page 20', function () { //Test this API using <number_of_data> values of 20
        const beersHeaders = {
            'Content-Type': 'application/json',
        };
        const beersQueryParameter = new GetBeersParameters();
        beersQueryParameter.page = '2';
        beersQueryParameter.per_page = '20';

        const beersResponse = getBeers(beersQueryParameter.buildQuery(), beersHeaders);
        check(beersResponse, {
            'is status 200': (r) => r.status === 200,
        });
    })

    group('Get Beers with per page 5', function () { //Test this API using <number_of_data> values of 5
        const beersHeaders = {
            'Content-Type': 'application/json',
        };
        const beersQueryParameter = new GetBeersParameters();
        beersQueryParameter.page = '2';
        beersQueryParameter.per_page = '5';

        const beersResponse = getBeers(beersQueryParameter.buildQuery(), beersHeaders);
        check(beersResponse, {
            'is status 200': (r) => r.status === 200,
        });
    })

    group('Get Beers with per page 1', function () { //Test this API using <number_of_data> values of 1
        const beersHeaders = {
            'Content-Type': 'application/json',
        };
        const beersQueryParameter = new GetBeersParameters();
        beersQueryParameter.page = '2';
        beersQueryParameter.per_page = '1';

        const beersResponse = getBeers(beersQueryParameter.buildQuery(), beersHeaders);
        check(beersResponse, {
            'is status 200': (r) => r.status === 200,
        });
        expect(beersResponse).to.have.validJsonBody();
        
    })

    describe('Get Beers', () => {
        const beersResponse = getBeersWithoutParams();

        expect(beersResponse.status, 'response status').to.equal(200);
        expect(beersResponse).to.have.validJsonBody();

        const beersParsed = JSON.parse(beersResponse.body);
        console.log("Length of data: " + beersParsed.length); //to verify that the amount of data returned

        for (var i = 0; i < beersParsed.length; i++) {
            console.log("Printed data name "+[i+1]+": "+beersParsed[i].name); // to print all returned “name” of list that endpoint data
        }

    })

    sleep(1);
}

