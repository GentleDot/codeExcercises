import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HelloUserComponent} from "./inputProcessOutput/hello-user/hello-user.component";
import {StrCntComponent} from "./inputProcessOutput/str-cnt/str-cnt.component";
import {EscapeCharacterComponent} from "./inputProcessOutput/escape-character/escape-character.component";
import {MadLibsComponent} from "./inputProcessOutput/mad-libs/mad-libs.component";
import {SimpleMathComponent} from "./inputProcessOutput/simple-math/simple-math.component";
import {EntireCalculatorComponent} from "./inputProcessOutput/entire-calculator/entire-calculator.component";
import {SquareFeetAndMetersComponent} from "./operation/square-feet-and-meters/square-feet-and-meters.component";
import {PizzaPartyComponent} from "./operation/pizza-party/pizza-party.component";
import {PaintCalculatorComponent} from "./operation/paint-calculator/paint-calculator.component";
import {SelfCheckoutComponent} from "./operation/self-checkout/self-checkout.component";
import {ExchangeRateComponent} from "./operation/exchange-rate/exchange-rate.component";
import {SimpleInterestComponent} from "./operation/simple-interest/simple-interest.component";


const routes: Routes = [
  {path: "chapter1",
  children: [
    {path: "test1", component: HelloUserComponent, },
    {path: "test2", component: StrCntComponent},
    {path: "test3", component: EscapeCharacterComponent},
    {path: "test4", component: MadLibsComponent},
    {path: "test5", component: SimpleMathComponent},
    {path: "test6", component: EntireCalculatorComponent},
  ]},
  {path: "chapter2",
  children: [
    {path: "test1", component: SquareFeetAndMetersComponent},
    {path: "test2", component: PizzaPartyComponent},
    {path: "test3", component: PaintCalculatorComponent},
    {path: "test4", component: SelfCheckoutComponent},
    {path: "test5", component: ExchangeRateComponent},
    {path: "test6", component: SimpleInterestComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
