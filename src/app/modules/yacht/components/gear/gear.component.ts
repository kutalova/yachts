import {Component, OnInit} from '@angular/core';
import {GearInterface} from '../../interfaces/gear.interface';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss']
})
export class GearComponent implements OnInit {

  gears: GearInterface[] = [
    {gear: 'Автопилот'},
    {gear: 'Аненометр/Ворона'},
    {gear: 'Грот с латами'},
    {gear: 'Генуя с скруткой'},
    {gear: 'Лейзи бег'},
    {gear: 'Спрейхуд'},
    {gear: 'Динамик в кокпите'},
    {gear: 'Холодильник'},
    {gear: 'Карты'},
    {gear: 'Огнетушитель'},
    {gear: 'Инвертор'},
    {gear: 'Микроволновая печь'},
    {gear: 'Солнечные панели'},
    {gear: 'Генератор'},
    {gear: 'Электролебёдка'},
    {gear: 'Душ в кокпите'},
    {gear: 'СРЗ чартплоттер'},
    {gear: 'Аварийный румпель'},
    {gear: 'Аптечка'},
    {gear: 'Аварийный буй-маяк'},
    {gear: 'Спасательные жилеты'},
    {gear: 'Навигационные огни'},
    {gear: 'Бинокль'},
    {gear: 'Эхолот'},
    {gear: 'Трап'},
    {gear: 'Трап для купания'},
    {gear: 'Отопление'},
    {gear: 'Кондиционер'},
    {gear: 'Спасательнй плот'},
    {gear: 'Огнетушитель'},
    {gear: 'Спасательный плот'},
    {gear: 'Кранцы'},
    {gear: 'Чартплоттер'},
    {gear: 'Береговое питание'},
    {gear: '220В'},
    {gear: 'Солнечные панели'},
    {gear: 'Плита с духовкой'},
    {gear: 'Запасной якорь'},
    {gear: 'Аварийные флаги'},
    {gear: 'Электрический брашпиль'},
    {gear: 'Раковина'},
    {gear: 'Столовые приборы'},
    {gear: 'Ремни безопасности (лайфлайны)'},
    {gear: 'Lazy jack'},
    {gear: 'B&G Autopilot'},
    {gear: 'Microvawe'},
    {gear: 'Self - tacking jib'},
    {gear: 'Dinghy with outboard'},
    {gear: 'Electric winch 50,2'},
    {gear: '(Salon + cabins)'},
    {gear: 'Fusion stereo'},
    {gear: 'Radio/CD/Bluetooth'},
    {gear: 'Stand up paddle'},
    {gear: 'LED TV'},
    {gear: 'Flippers and masks'},
    {gear: 'Fans in saloon & cabins'},
    {gear: '4 gel batteries 140 Amp each'},
    {gear: 'Snorkel Equipment wheel steering'},
    {gear: 'Greek water pilot'},
    {gear: 'Fire Blanket'},
    {gear: 'Halyards and sheets'},
    {gear: 'Pillows in aft deck, helmstation and upper deck sunbeds'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
