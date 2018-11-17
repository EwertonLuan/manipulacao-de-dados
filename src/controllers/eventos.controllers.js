


class SiteEventController {
	constructor(SiteEvent){
		this.SiteEvent = SiteEvent;
	}

	get(req, res) {
		return this.SiteEvent.find({})
			.then(siteEvent => res.send(siteEvent))
			.catch(err => res.status(400).send(err.message));
      
	}
    
	create(req, res) {
		const siteEvent = new this.SiteEvent(req.body);    
		return siteEvent.save()
			.then(() => res.status(201).send(siteEvent))
			.catch(err => res.status(422).send(err.message));
	}

}
export default SiteEventController; 