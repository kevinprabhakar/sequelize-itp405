const { expect } = require('chai');
const Track = require('./../../models/track');

describe('track', ()=>{
    it('should throw error when milliseconds is not numeric', async () => {
        try{
            let track = new Track({milliseconds:'a'});
            await track.validate();
        }catch(error){
            expect(error.errors[0].message).to.equal('Milliseconds must be numeric');
        }
    });

    it('should validate numeric millseconds', async () => {
        try{
            let track = new Track({milliseconds:1});
            await artist.validate();
            expect(track.milliseconds).to.equal(1);
        }catch(error){

        }
    });
});
