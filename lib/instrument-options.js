/*! This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

"use strict";

const sec = 1000;
const minutes = 60*sec;
const days = 86400 * sec;

/* instrument variables for micropilot
 *
 * (for now these are explicit, but could have sensible defaults)
 */
let instrumentOptions = exports.instrumentOptions = {
	studyid:  "yourstudy",         // study init
	duration:  86400 * 7 * sec,    // lifetime
	topics: [									     // list of observer service topics.
		"*"
	],
	uploadinterval:  86400 * sec,  				// for recurring upload of all data
	uploadurl:  "http://127.0.0.1:5000",  // ezupload, 3 attempts, 1 hour apart
 	pingurl:  "http://127.0.0.1:5000",  // if set, will ping during 'instrument.study()'
 	ezuploadretryinterval:  60*minutes, // how long between ezupload attempts
	studyendurl:  false,  // if given, open this in tab after study duration time.  Optional surveys, thanks, etc.
	killaddon:  true,    // should addon remove itself after DURATION (ezupload),
	demographics:  true  // should study ask demographics?
};