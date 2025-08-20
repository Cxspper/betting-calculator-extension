!(function () {
	try {
		var e =
				'undefined' != typeof window
					? window
					: 'undefined' != typeof global
					? global
					: 'undefined' != typeof self
					? self
					: {},
			t = new e.Error().stack;
		t &&
			((e._sentryDebugIds = e._sentryDebugIds || {}),
			(e._sentryDebugIds[t] = '8d72a8bf-875e-41f1-b87f-f97fbbeea96e'),
			(e._sentryDebugIdIdentifier =
				'sentry-dbid-8d72a8bf-875e-41f1-b87f-f97fbbeea96e'));
	} catch (e) {}
})(),
	(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
		[3232],
		{
			72567: (e, t, o) => {
				(window.__NEXT_P = window.__NEXT_P || []).push([
					'/betting-calculators/odds-converter',
					function () {
						return o(39421);
					},
				]);
			},
			49405: (e, t, o) => {
				'use strict';
				o.d(t, { Z: () => h });
				var a = o(24246),
					n = o(27378),
					i = o(33539),
					s = o(68625),
					r = o(52043),
					l = o(74863);
				let d = (e) => ({
						get americanOdds() {
							return e.toFixed(2);
						},
						get fractionOdds() {
							return (0, i.L3)(e).toFixed(2);
						},
						get decimalOdds() {
							return (0, i.E7)(e).toFixed(2);
						},
						get probability() {
							let t = (1 / +(0, i.E7)(e)) * 100;
							return isFinite(t) ? t.toFixed(2) : '';
						},
					}),
					h = () => {
						let [e, t] = (0, n.useState)({
								fractionOdds: '',
								decimalOdds: '',
								americanOdds: '',
								probability: '',
							}),
							o = (e, o) => (a) => {
								t({
									...d(o(+a.currentTarget.value)),
									[e]: a.currentTarget.value,
								});
							};
						return (0, a.jsxs)('div', {
							className:
								'grid grid-flow-row items-center gap-x-5 gap-y-2 md:grid-flow-col md:grid-rows-2',
							children: [
								(0, a.jsx)(s.x, {
									size: 'small',
									element: 'span',
									className: 'font-medium',
									children: 'Fraction',
								}),
								(0, a.jsx)(r.II, {
									type: 'number',
									className: 'min-w-[120px]',
									name: 'fractionOdds',
									placeholder: '1.10',
									step: 0.1,
									value: e.fractionOdds,
									onChange: o('fractionOdds', i.Dm),
									flat: !0,
								}),
								(0, a.jsx)(s.x, {
									size: 'small',
									element: 'span',
									className: 'font-medium',
									children: 'Decimal',
								}),
								(0, a.jsx)(r.II, {
									type: 'number',
									className: 'min-w-[120px]',
									name: 'decimalOdds',
									placeholder: '2.10',
									step: 0.1,
									value: e.decimalOdds,
									onChange: o('decimalOdds', i.mC),
									flat: !0,
								}),
								(0, a.jsx)(s.x, {
									size: 'small',
									element: 'span',
									className: 'font-medium',
									children: 'American',
								}),
								(0, a.jsx)(r.II, {
									type: 'number',
									className: 'min-w-[120px]',
									name: 'americanOdds',
									placeholder: '+110',
									value: e.americanOdds,
									onChange: o('americanOdds', (e) => e),
									flat: !0,
								}),
								(0, a.jsx)(s.x, {
									size: 'small',
									element: 'span',
									className: 'font-medium',
									children: 'Probability %',
								}),
								(0, a.jsx)(r.II, {
									type: 'number',
									className: 'min-w-[120px]',
									name: 'probability',
									placeholder: '47.62',
									value: e.probability,
									onChange: o('probability', i.o_),
									flat: !0,
									RightIcon: l.Z,
								}),
							],
						});
					};
			},
			68738: (e, t, o) => {
				'use strict';
				o.d(t, { P: () => a });
				let a = {
					arbitrage: [
						{
							question: 'What is Arbitrage?',
							answer:
								'Arbitrage betting is becoming more and more common in the betting world. It requires you to have multiple sportsbooks, and be comparing lines between these sportsbooks to see if an opportunity will arise to allow you to arbitrage. You place bets on both outcomes of the game; Team A to win on Sportsbook 1, and Team B to win on Sportsbook 2.',
						},
						{
							question: 'How is Arbitrage Calculated?',
							answer:
								'Arbitrage is calculated based on the odds of the two lines you plan to play. Say you have a line of -150 for Team A to win, and +175 for Team B to win. Because there is a 25-point discrepancy between the two plays to make them even, that is where the arbitrage is found.\nBet $150 to win $100 on Team A, total payout of $250\nBet $90.93 to win $160 on Team B, total payout of $250\nTotal risk = $150 + $90.93 = $240.93\nTotal payout = $250\nProfit = $250 - $240.93 = $9.07',
						},
						{
							question: 'How to use an Arbitrage Calculator in Sports Betting?',
							answer:
								'Using an arbitrage calculator is very straightforward. You input the two sides of the lines that you are betting on from the different sportsbooks, and how much you would like to wager on the first bet. Keep in mind, the more you bet on the original bet, the higher the hedge bet will be, so make sure that you are comfortable fronting a larger sum in order to increase your profit.',
						},
					],
					expectedValue: [
						{
							question: 'What is the Expected Value?',
							answer:
								'Expected value (EV) is a common term that is used by many sharps in the betting world. EV is what you can expect to profit if you bet the same amount on the same odds over and over an infinite amount of times. Oddsmakers assign odds on each bet, and it is up to you to find the expected value in each line. For example, if the Golden State Warriors’ moneyline is +110 odds against the Memphis Grizzlies, that means the books believe the Warriors have a 43.48% chance to win. However, the sharpest sportsbook in the world has the Warriors’ moneyline at -105 and the Grizzlies’ moneyline at -105 as well, which means they believe both teams have a 50% chance to win.',
						},
						{
							question: 'How to Calculate Expected Value (EV)?',
							answer:
								'The formula for expected value = (fair win probability) x (profit if win) - (fair loss probability) x (stake). Using the example above, if you were to put $100 on the Warriors, the EV would be:\nEV = (50%) x ($110) - (50%) x ($100) = 55 - 50 = $5, meaning this is profitable by $5 and has a positive expected value.',
						},
						{
							question: 'When to use an Expected Value Calculator?',
							answer:
								'You should be looking for EV bets as much as possible. With the way that sportsbooks assign their lines, if you bet the favorite every time, you will most likely end up losing money in the long run. Assigning EV to each of your bets will help you realize where there is value and where you can make a profit in the long run. The objective of each bettor should be to profit in the long run, so you should take advantage of every opportunity to pull as much value in your bets as possible.',
						},
					],
					freeBetConversion: [
						{
							question: 'What is a Bonus Bet?',
							answer:
								'A bonus bet is a bet that sportsbooks give you as an incentive or reward for using their book. Many sportsbooks offer sign up bonuses in the form of bonus bets; if you deposit $1,000, you will receive a $500 bonus bet, for example. Bonus bets are almost always unable to be withdrawn and must be bet on the sportsbook in order to see any real money. Bonus bets have no value outside of the winnings; you do not recoup the bonus bet wager on your total winnings. For example, if you place your $100 bonus bet on a play that is +100 and win, you will only receive $100 dollars back, not $200.',
						},
						{
							question: 'How to Convert Bonus Bet?',
							answer:
								'Converting a bonus bet is how you turn that “sportsbook only” money into real money that you can withdraw (also known as “churn”). The trick is to find lines across different books that have higher plus-odds than minus-odds. For example, say over 215.5 total points for Golden State Warriors vs. Memphis Grizzlies is +300 on one book, and under 215.5 for the same game is -275 on another book. You would place your $100 bonus bet on o215.5 at +300 odds, and place a $220 bet on u215.5 at -275 odds on the second book. No matter the outcome you would net $80. (Bonus bet wins = $300 - $220 hedge bet = $80, hedge bet wins = $80.)',
						},
						{
							question: 'When to use the Bonus Bet Conversion tool?',
							answer:
								'Use the bonus bet conversion tool whenever you receive a bonus bet on any sportsbook, regardless of the amount. The goal of bonus bets is to turn them into real money that you can withdraw, or churning the bonus bet into money. You should aim to find lines that will give you 70% churn or higher, and using the bonus bet conversion tool will do all the heavy lifting for you and provide the percentage for a bonus bet conversion within seconds.',
						},
					],
					kelly: [
						{
							question: 'What is the Kelly Criterion?',
							answer:
								'The Kelly Criterion is a mathematical formula that helps determine how much to invest in a given asset, and in this case, how much to wager on a sports bet. Using the Kelly Criterion can help in maximizing your potential profit in the long run, and keep your bankroll managed to avoid you losing it all in just a few plays.',
						},
						{
							question: 'How is the Kelly Criterion Calculated?',
							answer:
								'The goal of the Kelly Criterion is to keep you from losing your entire bankroll and hitting zero. It provides a proper percentage of your bankroll that you should be betting based on the probability of the play winning. The equation is simple itself; you multiply the percent chance to win by two, then subtract one and you’ll have your wager size percentage.',
						},
						{
							question: 'Who Created the Kelly Criterion?',
							answer:
								'John Kelly is the creator of the Kelly Criterion and he originally created the equation for long-distance telephone signals. He realized that it could be applied to investing and money management, and a new benchmark was born.',
						},
					],
					noVig: [
						{
							question: 'What does Fair Odds mean?',
							answer:
								'Fair odds (also known as “no-vig fair odds”) are the true odds that a bet has at winning. Although the fair odds for one of two evenly matched teams to win should be 50% in theory, sportsbooks will never give you +100 odds on both plays. They will typically give odds at -110. In this situation, although you should theoretically have a 50% chance to win, sportsbooks need to make a profit, so will add what is called “vig” or “juice” into the wager.',
						},
						{
							question: 'How to Calculate Fair Odds?',
							answer:
								'Using the example of -110 odds for both outcomes, you are able to calculate fair odds by doing the following:\nFair odds = (-1*(Odds)) / (-1(Odds) + 100); Fair odds = (-1*(-110)) / (-1(-110) + 100); 52.4% or 0.524 = 110 / 210.\nIn this scenario, both teams have a 52.4% chance to win, according to the sportsbooks. If you add that up, it totals 104.8%. The extra 4.8% is the “vig” that the oddsmakers add to make a profit. To remove the vig and find fair odds in this example, you simply divide 52.4% by 104.8% to give you 50% fair odds for each play.',
						},
					],
					oddsConverter: [
						{
							question: 'What does an Odds Converter do?',
							answer:
								'Odds converters help change odds between decimal, fractional and American odds formats. Across the world and sportsbooks, you will see different ways sports wagers are presented. Decimal odds is the standard format for most countries; if you wager $100 on 2.0 decimal odds and your bet wins, your total payout is $200 (2.0 x $100 = $200). Fractional odds are popular in the United Kingdom; $100 on 1-2 (or 0.5) fractional odds and your bet wins, you will earn $50 profit (1-2 x $100). Finally, American odds are used in the United States; betting $100 at +200 odds means that you profit $200 if your bet wins.',
						},
						{
							question: 'How to Convert Odds?',
							answer:
								'In order to convert odds, you will need to understand the basic principles of the three different formats listed above. Although you can convert by hand, there are calculators that do the math for you and spit out what the value would be in any format.',
						},
					],
					parlay: [
						{
							question: 'What is a Parlay Bet?',
							answer:
								'A parlay bet is a combination of two or more bets that are combined into one, and have better odds for payout if all wagers win. In order to win a parlay, every single play in your parly must win; if even one wager loses, you will lose the entire parlay wager. If you win, the odds generally are in your favor and you could win a large sum with little risk. It is seen as a low-risk, high-reward play; however, the chances of you winning parlays in general are typically very low.',
						},
						{
							question: 'How to Calculate Parlay Odds?',
							answer:
								'All sportsbooks will provide you with the parlay odds if you would like to combine multiple wagers, but check out below for an example on how parlays are calculated:\n\nGreen Bay Packers are -120 (wager $120 to win 100), so the total payout would be $220. 220/120 = 1.83;\nNew England Patriots are -110 (wager $110 to win 100), so the total payout would be $210. 210/110 = 1.91;\nKansas City Chiefs are -150 (wager $150 to win 100), so the total payout would be $250\n250/150 = 1.67;\nUsing the decimal odds, you find the multiplier of the parlay:\n1.83 x 1.91 x 1.67 = 5.83, converting back to American odds results in +483 or $4.83 for every dollar you wager on this parlay.',
						},
					],
					vig: [
						{
							question: 'What is a Vig?',
							answer:
								"Vigorish, or vig for short, is the extra odds that sportsbooks bake into any bets you see on their books, with the sole purpose of making sure that sportsbooks still make a profit. It can essentially be looked at as the oddsmakers' fees for offering up bets for us to wager on. Vig can also be referred to as juice, cut or commission, among others.",
						},
						{
							question: 'How is Vig Calculated?',
							answer:
								'You should use a vig calculator when possible, but to run through a quick example:\n\nSay the Golden State Warriors are -150 and the Los Angeles Lakers are +100\n\nBetting on the Warriors would translate to $150 (wagered)/$250 (return) = 0.6, or a win probability of 60%. Betting the Lakers means $100 (wagered)/200 (return) = 0.5, or a win probability of 50%.\nSum the probability for both outcomes (60%) + (50%) = 110% total implied probability. That gives you a Vig of 10% (110% - 100%). This means that sportsbooks payout $100 for every $110 in wagers accepted for this matchup.',
						},
					],
					poisson: [
						{
							question: 'What is the Poisson Distribution in Sports Betting?',
							answer:
								'The sports betting wagers that fall under the Poisson distribution typically are prop bets. The Poisson distribution assumes that if you have the “average” number of times an event occurs (e.g. Devin Booker 2.7 3’s per game), then you can mathematically determine the probability of that event occurring any number of times (e.g. the probability Booker has 5 3’s in a game).',
						},
						{
							question: 'Why is the Poisson sports Betting Calculator Useful?',
							answer:
								'Many sportsbooks offer “alternate” lines. For example, on FanDuel, you can bet on Devin Booker to record 1+ made three, 2+ made threes, 3+ made threes, etc. The Poisson sports betting calculator is extremely useful for analyzing these alternate player prop markets as you hunt for value and Positive EV bets.',
						},
						{
							question: 'How to Calculate Poisson?',
							answer:
								'There is a pretty complex formula for calculating Poisson distribution that involves the average rate of success for an event, the number of times you need that event to occur, and even a statistical constant called Euler’s number. It essentially takes the cumulative probability based on the average rate of success and the number of events you need to occur. Fortunately we have a simple calculator you can use to find it, rather than delve through pages of statistical analysis.',
						},
					],
					roundRobin: [
						{
							question: 'When Should I Place a Round Robin Bet?',
							answer:
								'Let’s say you really like three betting picks - you don’t have high confidence that all of your three bets will win, but you’re very confident that at least two will. In this case, you may want to place a 3 leg round robin - if two legs win, you’ll win one of your three parlay bets (each with 2 legs). If all three legs win, you’ll win all three of your parlays!',
						},
						{
							question: 'How are Round Robins Different from Parlays?',
							answer:
								'With a parlay, you need every leg to hit to win your bet. On the other hand, with a round robin, you don’t need to win every bet to show a profit.',
						},
						{
							question:
								'How can I Create the Most Profitable Round Robin Bets?',
							answer:
								'We recommend using the OddsJam Positive EV Betting Tool to find mathematically profitable bets for your Round Robin. If each leg of a Round Robin is positive EV, the entire Round Robin is as well. You should always be looking for value as a sports bettor!',
						},
					],
					halfPoint: [
						{
							question: 'What leagues does the Half Point Calculator work for?',
							answer:
								'The half point calculator currently works for the NBA, NFL, NCAAB, NCAAF, MLB and NHL. However, for the MLB & NHL, the half point calculator only works for totals, not spread bets (e.g. run line & puck line bets).',
						},
						{
							question: 'How to Calculate Half Point?',
							answer:
								'This is done by calculating the fair odds for each half point value above and below the current spread to identify profitable opportunities to buy or sell points.',
						},
						{
							question:
								'How can a Half Point Calculator help you in Sports Betting?',
							answer:
								'The half point calculator can help you find the value in buying or selling a half point, and determine if it is worth it to do so.',
						},
					],
					pointSpread: [
						{
							question: 'What is Point Spread?',
							answer:
								'A point spread is how many points the sportsbooks believe a team will win or lose by. A point spread is always either a whole number, or a halved point. The favorite team in the matchup is the team that is designated with a minus sign, and the underdog team is the team that has a point spread with a plus sign associated with it. For example, if Team A is -3.5, that means they are the favorite team, and in order for you to win a bet, Team A must win by at least four points. If they win by three points, you lose your bet. Alternatively, Team B would be +3.5 in this situation. If you bet on Team B point spread and they lose by three points or less, you will win your bet. If they lose by four or more points, you will lose your bet.',
						},
						{
							question: 'How is a Point Spread Calculated?',
							answer:
								'Odds makers for each sports book determine what the point spread will be for each individual game. In most cases, the lines are the same across multiple sportsbooks, and you may see a difference in about 0.5 points from time to time.\nAfter the line is initially released, it will fluctuate based on the money going to either side.',
						},
						{
							question:
								'How to use a Point Spread Calculator in Sports Betting?',
							answer:
								'A point spread calculator can help in your confidence level with the bets you see on the sportsbooks. With the point spread calculator, you will be able to find where there is an edge in the lines, and what the most likely outcome will be based on the point spread. Using that information, you will be able to see how much you should be betting on this line based on your bankroll, and the percentage chance the bet should theoretically win.',
						},
					],
					hold: [
						{
							question: 'How do I find Markets with a Low Hold?',
							answer:
								'We recommend using the OddsJam sports betting software. OddsJam has a <0>“Low Holds” Betting Tool</0>. You can typically even find pick ‘em markets on the OddsJam Low Holds Betting Tool!',
							links: ['https://oddsjam.com/betting-tools/low-hold'],
						},
						{
							question: 'What is a High Hold Percentage?',
							answer:
								'Anything above 3.5% is a high hold percentage between two sportsbooks. Betting on markets with a hold above 3.5% is suboptimal for sports bettors.',
						},
						{
							question: 'How is Hold Calculated?',
							answer:
								'You must be able to understand implied probability in order to understand hold. In the real world, the sum of two different events occurring will be 100%. However, in sports betting, that is not the case. There is juice or tax that the sportsbooks add so that they make money off of every play. To calculate the hold, you simply subtract 100 from the probability of all possible outcomes.',
						},
					],
					implied: [
						{
							question: 'How to calculate Implied Probability in betting?',
							answer:
								'Nothing in this world seems to be universal these days, betting odds included. The three formats that you’ll run into most are American, Decimal & Fractional. Since these are three separate odds formats there will be different formulas to convert each into implied probability.',
						},
						{
							question:
								'How to convert American odds into implied probability?',
							answer:
								'Converting American odds can be more confusing than the rest as it requires two formulas, one for both the Positive Odds & Negative Odds.\nIf the odds are positive the formula is 100/(Positive Odds + 100) x 100.\nIf the odds are negative the formula is Odds/(Odds +100) x 100.',
						},
						{
							question: 'How to convert Decimal Odds into implied probability?',
							answer:
								'Decimal Odds are the standard format in most countries around the world and commonly are referred to as European Odds. They are the most straightforward odds and can tell you exactly what your potential winnings would be with just a glance. The decimal represents the amount of money won for every dollar wagered. If the odds are 4.50 and you bet $10, the payout upon a win will be $45. The formula for converting decimal odds into implied probability is (1/Decimal Odds) x 100.',
						},
						{
							question:
								'How to convert Fractional Odds into implied probability?',
							answer:
								'Lastly, we need to discuss Fractional Odds. They are sometimes referred to as British Odds or Traditional Odds. You typically find these odds across the UK and throughout Ireland as well. These odds portray the potential profit should the bet win, quoted as a fraction or sometimes a ratio of the stake (risk amount). The formula to convert fractional odds into implied probability is Denominator/(Numerator+Denominator) x 100.',
						},
					],
				};
			},
			74863: (e, t, o) => {
				'use strict';
				o.d(t, { Z: () => n });
				var a = o(24246);
				let n = (e) => {
					var t, o;
					return (0, a.jsx)('svg', {
						width: null !== (t = e.width) && void 0 !== t ? t : 12,
						height: null !== (o = e.height) && void 0 !== o ? o : 12,
						viewBox: '-2 -2 16 16',
						className: e.className,
						fill: 'none',
						xmlns: 'http://www.w3.org/2000/svg',
						children: (0, a.jsx)('path', {
							d: 'M5.24456 9.09091V8.55398C5.24456 8.18277 5.32079 7.84304 5.47326 7.5348C5.62903 7.22325 5.85441 6.97467 6.14939 6.78906C6.44769 6.60014 6.80896 6.50568 7.2332 6.50568C7.66407 6.50568 8.02534 6.60014 8.31701 6.78906C8.60867 6.97467 8.82908 7.22325 8.97823 7.5348C9.12737 7.84304 9.20195 8.18277 9.20195 8.55398V9.09091C9.20195 9.46212 9.12572 9.8035 8.97326 10.1151C8.82411 10.4233 8.60204 10.6719 8.30706 10.8608C8.0154 11.0464 7.65744 11.1392 7.2332 11.1392C6.80233 11.1392 6.4394 11.0464 6.14442 10.8608C5.84944 10.6719 5.62572 10.4233 5.47326 10.1151C5.32079 9.8035 5.24456 9.46212 5.24456 9.09091ZM6.25877 8.55398V9.09091C6.25877 9.39915 6.33168 9.6759 6.47752 9.92116C6.62335 10.1631 6.87524 10.2841 7.2332 10.2841C7.58121 10.2841 7.82648 10.1631 7.96899 9.92116C8.11483 9.6759 8.18774 9.39915 8.18774 9.09091V8.55398C8.18774 8.24574 8.11814 7.97064 7.97894 7.72869C7.83973 7.48343 7.59115 7.3608 7.2332 7.3608C6.88519 7.3608 6.63495 7.48343 6.48249 7.72869C6.33334 7.97064 6.25877 8.24574 6.25877 8.55398ZM0.17354 3.2642V2.72727C0.17354 2.35606 0.249771 2.01634 0.402233 1.7081C0.558009 1.39654 0.783388 1.14796 1.07837 0.962358C1.37666 0.773437 1.73793 0.678977 2.16218 0.678977C2.59305 0.678977 2.95432 0.773437 3.24598 0.962358C3.53765 1.14796 3.75806 1.39654 3.9072 1.7081C4.05635 2.01634 4.13093 2.35606 4.13093 2.72727V3.2642C4.13093 3.63542 4.0547 3.9768 3.90223 4.28835C3.75309 4.59659 3.53102 4.84517 3.23604 5.03409C2.94437 5.2197 2.58642 5.3125 2.16218 5.3125C1.7313 5.3125 1.36838 5.2197 1.0734 5.03409C0.778417 4.84517 0.554695 4.59659 0.402233 4.28835C0.249771 3.9768 0.17354 3.63542 0.17354 3.2642ZM1.18774 2.72727V3.2642C1.18774 3.57244 1.26066 3.8492 1.40649 4.09446C1.55233 4.33641 1.80422 4.45739 2.16218 4.45739C2.51019 4.45739 2.75545 4.33641 2.89797 4.09446C3.0438 3.8492 3.11672 3.57244 3.11672 3.2642V2.72727C3.11672 2.41903 3.04712 2.14394 2.90791 1.90199C2.76871 1.65672 2.52013 1.53409 2.16218 1.53409C1.81416 1.53409 1.56393 1.65672 1.41147 1.90199C1.26232 2.14394 1.18774 2.41903 1.18774 2.72727ZM0.551381 11L7.55138 0.818182H8.6849L1.6849 11H0.551381Z',
							fill: 'currentColor',
						}),
					});
				};
			},
			39421: (e, t, o) => {
				'use strict';
				o.r(t), o.d(t, { __N_SSP: () => c, default: () => b });
				var a = o(24246),
					n = o(15045),
					i = o(68738),
					s = o(49280),
					r = o(12850),
					l = o(49405),
					d = o(5449),
					h = o(76544);
				let u = () => {
					let e = i.P.oddsConverter;
					return (0, a.jsx)(d.w8, {
						description:
							'Our betting odds converter allows you to calculate fractions, decimals, american and european formats to the one you desire.',
						faqItems: e,
						title: 'Betting Odds Converter & Probability Calculator',
					});
				};
				var c = !0;
				let b = () => {
					let e = i.P.oddsConverter;
					return (0, a.jsx)(r.f$, {
						head: (0, a.jsx)(u, {}),
						subHead: (0, a.jsx)(n.R, {
							title: 'Betting Odds Converter & Probability Calculator',
						}),
						children: (0, a.jsx)(n.b, {
							calculatorComponent: (0, a.jsx)(l.Z, {}),
							faqs: e,
							calcDescription: (0, a.jsx)(h.E, {
								title: 'How to Convert Sports Betting Odds',
								content: (0, s.Zz)(
									'The OddsJam odds converter makes it easy to switch between <0>decimal odds</0>, <1>American odds</1>, and <2>fractional odds</2>. Many bookmakers support all three odds formats. Of course, in the US, American odds are the most common.\n\n    Decimal odds are the standard odds format in most countries, and the odds quote the potential payout should the bet win. As an example, if you wager $100 on 2.0 decimal odds and your bet wins, your total payout is $200 (2.0 x $100 = $200). This payout includes your initial stake, so you need to subtract your initial stake ($100) to determine your profit: $200 - $100 = $100 profit. As you can see in the odds converter, 2.0 is equivalent to +100 American odds and 1/1 fractional odds.\n\n    American odds are the main odds format in the US. Positive figures (e.g. +200, +450) represent total profit should the bet win, assuming the bet size is $100. In other words, betting $100 at +200 odds means that you profit $200 if your bet wins. Negative figures (e.g. -200, -450) represent how much a bettor must wager to win $100 profit. In other words, if a wager is -200 odds, a bettor must place $200 to earn $100 profit. As shown in the odds converter, -200 American odds is equivalent to 1.5 decimal odds and 1/2 fractional odds.\n\n    Fractional odds are mainly used in the UK, as well as Ireland. This odds format shows the potential profit should the bet win, quoted as a fraction of the stake. As an example, if you bet $100 on 1/2 (or 0.5) fractional odds and your bet wins, you will earn $50 profit (1/2 x $100). As shown in the odds converter, 1/2 is equivalent to -200 American odds and 1.5 decimal odds.\n\n    The odds converter also calculates the breakeven win probability of a given odd, which can be very useful when evaluating a bet. For example, if you place a bet at +100 odds, then the breakeven win probability is 50%. You should only place this wager if you believe the “true” or “fair” probability of the wager winning is greater than 50%. On the other hand, if you place a bet at +900 odds, then the breakeven win probability is only 10%. You only need to win +900 wagers 1/10 times to breakeven. So if you evaluate a bet as having a 12.5% chance of winning, then this bet is <3>mathematically profitable</3>. The “true” odds are > 10%',
									[
										'/betting-education/decimal-odds',
										'/betting-education/american-odds',
										'/betting-education/fractional-odds',
										'/betting-education/positive-expected-value-betting',
									]
								),
							}),
						}),
					});
				};
			},
		},
		(e) => {
			var t = (t) => e((e.s = t));
			e.O(0, [5449, 7448, 9718, 2888, 9774, 179], () => t(72567)),
				(_N_E = e.O());
		},
	]);
