# ULB100 技术规格书

## 产品概述

ULB100模组是楷客科技采用STM32WL系列SOC芯片自主研发的支持自组网协议的LoRa模组，具有非常丰富的外设，包含26个GPIOs, UART, I2C, SPI, ADC, PWM等等，并且具有超低的功耗和超小的尺寸，该模组是为满足物联网项目对于稳定可靠通讯的需求而设计，特别适合应用于诸如智慧城市、智能家居、跟踪定位以及工业物联网等多个领域。目前ULB100已经支持LoRaWAN、亚马逊Sidewalk、P2P、KK-Link自组网等多种协议栈。另外，ULB100也兼容Zephyr RTOS操作系统，特别适合开发者和无线发烧友集成到他们的产品中进行二次开发。

## 订购信息

### 模块

| Part Number | Operating Band                                         | Output Power |
| ----------- | ------------------------------------------------------ | ------------ |
| ULB100LBLP  | Low Band 434MHz/470MHz~510MHz with High efficiency PA  | 14dBm        |
| ULB100HBLP  | High Band 868MHz/902MHz~928MHz with High efficiency PA | 14dBm        |
| ULB100LBHP  | Low Band 434MHz/470MHz~510MHz with High power PA       | 22dBm        |
| ULB100HBHP  | High Band 868MHz/902MHz~928MHz with High power PA      | 22dBm        |

### 开发板

| Part Number | Operating Band                                    | Output Power |
| ----------- | ------------------------------------------------- | ------------ |
| EULB100LBLP | EVK of ULB100LBLP, Low Band 434MHz/470MHz~510MHz  | 14dBm        |
| EULB100HBLP | EVK of ULB100HBLP, High Band 868MHz/902MHz~928MHz | 14dBm        |
| EULB100LBHP | EVK of ULB100LBHP, Low Band 434MHz/470MHz~510MHz  | 22dBm        |
| EULB100HBHP | EVK of ULB100HBHP, High Band 868MHz/902MHz~928MHz | 22dBm        |

邮箱：contact@cactes.com



## 特点

- MCU及片上存储
  - ARM® Cortex-M4处理器，主频48MHz
  - Up to 256kB flash和64 kB RAM
- LoRa
  - -138dBm@300bps接收灵敏度
  - 支持14dBm高效率发射（20mA发射电流）和22dBm高功率发射（120mA发射电流）
  - 支持LoRa Point-to-Point (P2P)通信方式
  - 支持LoRaWAN 1.0.4全球协议栈，
    - OTAA/ABP
    - CN470, IN865, EU868, AU915, US915, KR920, RU864, and AS923
  - 支持亚马逊Sidewalk协议栈
  - 支持楷客科技即插即用自组网协议栈KK-Link
- 基于串口的AT指令接口
- 丰富的外设接口，26 x GPIOx/USB/UART/SPI/I2C/PWM/ADC
- 2.0uA 超低功耗（可接收串口数据，可 RTC 唤醒）
- 超小尺寸 12.2 x 13.2 x2.5mm
- 工作条件：
  - 工作电压1.8V to 3.6V
  - 工作温度-40 to +85℃

## 应用

- 智能穿戴
- 智能家居
- 人员及资产定位跟踪
- 无线传感终端
- 工业控制
- 智能抄表
- 智慧农业

![image-20230810102711424](https://img.cactes.com/20230810-102713-682.png)

## 硬件原理框图

![image-20230810103056890](https://img.cactes.com/20230810-103058-006.png)

## 管脚说明

### 管脚布局

![image-20230810103153732](https://img.cactes.com/20230810-103154-923.png)

### 管脚定义

ULB100模组共有54个管脚，详细管脚定义如下表所示。

| No. | Name | Type | Function                |
| ------------- | -------------- | -------------- | --------------------------------- |
| 1             | PB4            | I/O/T          | MCU GPIO                          |
| 2             | PB5            | I/O/T          | MCU GPIO                          |
| 3             | PB6            | I/O/T          | MCU GPIO                          |
| 4             | PB7            | I/O/T          | MCU GPIO                          |
| 5             | PB8            | I/O/T          | MCU GPIO                          |
| 6             | PA0            | I/O/T          | MCU GPIO                          |
| 7             | PA1            | I/O/T          | MCU GPIO                          |
| 8             | PA2            | I/O/T          | LPUART1_RX from MCU               |
| 9             | GND            | P              | Ground                            |
| 10            | ANT            | ANT            | LoRa Antenna Port                 |
| 11            | PA3            | I/O/T          | LPUART1_TX from MCU               |
| 12            | PA4            | I/O/T          | MCU GPIO                          |
| 13            | PA5            | I/O/T          | MCU GPIO                          |
| 14            | GND            | P              | Ground                            |
| 15            | PA6            | I/O/T          | MCU GPIO                          |
| 16            | PA7            | I/O/T          | MCU GPIO                          |
| 17            | PA8            | I/O/T          | MCU GPIO                          |
| 18            | PA9            | I/O/T          | MCU GPIO                          |
| 19            | NRST           | I              | MCU Reset Pin,Active Low          |
| 20            | BOOT0          | I              | MCU GPIO                          |
| 21            | PB0            | I/O/T          | MCU GPIO                          |
| 22            | PB2            | I/O/T          | MCU GPIO                          |
| 23            | PB12           | I/O/T          | MCU GPIO                          |
| 24            | PA10           | I/O/T          | MCU GPIO                          |
| 25            | PA11           | I/O/T          | MCU GPIO                          |
| 26            | PA12           | I/O/T          | MCU GPIO                          |
| 27            | NC             | -              | No connection                     |
| 28            | GND            | P              | Ground                            |
| 29            | VDD            | P              | Power supply                      |
| 30            | GND            | P              | Ground                            |
| 31            | PC13           | I/O/T          | MCU GPIO                          |
| 32            | PA13           | I/O/T          | SWDIO of SWD for program download |
| 33            | PA14           | I/O/T          | SWCLK of SWD for program download |
| 34            | PA15           | I/O/T          | MCU GPIO                          |
| 35            | NC             | -              | No connection                     |
| 36            | GND            | P              | Ground                            |
| 37            | NC             | -              | No connection                     |
| 38            | NC             | -              | No connection                     |
| 39            | PB3            | I/O/T          | MCU GPIO                          |
| 40            | GND            | P              | Ground                            |

*P: power supply; I: input; O: output; T: high impedance; ANT: antenna port.*

## 电气性能指标

### 极限工作条件

高于下表所列出的绝对最大额定值的应力可能会对模组造成永久性损坏，或长时间暴露于绝对最大额定条件可能会影响设备的可靠性。

| Symbol | Parameter     | Min | Max | Unit |
| ----------- | ----------------------- | ------------- | ------------- | -------------- |
| VDD         | Power supply voltage    | -0.3          | 3.9           | V              |
| VIN         | I/O pin voltage         | -0.3          | 3.9           | V              |
| Pin_LoRa    | RF input level@ANT_LoRa | -             | 0             | dBm            |
| TA          | Operating Temperature   | -40           | 85            | ℃              |
| TStore      | Storage Temperature     | -65           | 150           | ℃              |

### 建议工作条件

| Symbol | Parameter             | Min  | Type | Max  | Unit |
| ------ | --------------------- | ---- | ---- | ---- | ---- |
| VDD    | Power supply voltage  | 1.8  | 3.3  | 3.6  | V    |
| VIN    | I/O input voltage     | -0.3 | 3.3  | 3.6  | V    |
| TA     | Operating Temperature | -40  | 25   | 85   | ℃    |

### 技术规格

| Model                   | ULB100LBLP/ULB100HBLP/ULB100LBHP/ULB100HBHP        |
| --------------------------------- | ------------------------------------------------------------ |
| **Platform Configurations** |                                                              |
| MCU                               | ARM® Cortex®-M4 32-bit processor, 48 MHz internal clock      |
| MCU Flash                         | up to 256KB                                                  |
| RAM                               | up to 64kB                                                   |
| **System**              |                                                              |
| MCU OS                            | Zephyr RTOS                                                  |
| **Wireless**            |                                                              |
| LoRa                              | LoRaWAN 1.0.4, Sidewalk, KK-Link, P2P, Private LoRa          |
| **RF Characteristic**   |                                                              |
| TXOP                              | ULB00LBLP/ULB100HBLP: 15dBm maximum ULB00LBHP/ULB100HBHP: 22dBm maximum |
| Sensitivity                       | -138dBm@SF12/125kHz, LoRa                                    |
|                                   | -125dBm@SF7/125kHz, LoRa                                     |
|                                   | -117dBm@4.8kbps, FSK                                         |
|                                   | -108dBm@38.4kbps, FSK                                        |
| Data rates                        | Spreading Factor from SF12 to SF5; Bandwidth from 125kHz to 250kHz |
| **Power Consumption**   |                                                              |
| Power Supply                      | 3.3V                                                         |
| Current@sleep mode                | 2.35uA                                                       |
| Current@Standby mode              | 1.05mA                                                       |
| Current@LoRa Transmitting         | ULB100LBLP: 22.5mA@14dBm<br />ULB100HBLP: 23.5mA@14dBm<br />ULB100LBHP: 110mA@22dBm<br />ULB100HBHP: 120mA@22dBm |
| Current@LoRa Receiving            | 5.5mA                                                        |
| **Interface**           |                                                              |
|                                   | GPIO x26                                                     |
|                                   | UART x2 LPUART x1                                            |
|                                   | I2C x3                                                       |
|                                   | SPI x2                                                       |
|                                   | ADC x9                                                       |
|                                   | PWM                                                          |
| **Environment**         |                                                              |
| Operating Temperature             | -40~85℃                                                      |
| Humidity                          | 5%~ 95% RH                                                   |
| Mechnaical              |                                                              |
| Size                              | 12.2*13.2*2.5mm                                              |
| Weight                            | 1g                                                           |

## 射频性能测试

测试条件，VDD=3.3V，Ta=25℃。

###  ULB100LBLP 性能测试 

ULB100LBLP TXOP@14dBm/470MHz

![img](https://img.cactes.com/20230810-104456-110.jpg)



ULB100LBLP TXOP@14dBm/500MHz

![img](https://img.cactes.com/20230810-104524-180.jpg)



ULB100LBLP Spurs@14dBm/470MHz

![img](https://img.cactes.com/20230810-104652-368.jpg)



ULB100LBLP Spurs@14dBm/500MHz

![img](https://img.cactes.com/20230810-104709-084.jpg)



ULB100LBLP TXOP vs Current@470MHz

<img src="https://img.cactes.com/20230810-104801-938.png" alt="image-20230810104800741" style="zoom:50%;" />



ULB100LBLP TXOP vs Current@500MHz

<img src="https://img.cactes.com/20230810-104838-690.png" alt="image-20230810104837537" style="zoom:65%;" />

### ULB100HBLP性能测试

ULB100HBLP TXOP@14dBm/868MHz

![img](https://img.cactes.com/20230810-110401-375.jpg)



ULB100HBLP TXOP@14dBm/915MHz

![img](https://img.cactes.com/20230810-110412-061.jpg)



ULB100HBLP Spurs@14dBm/868MHz

![img](https://img.cactes.com/20230810-110419-953.jpg)



ULB100HBLP Spurs@14dBm/915MHz

![img](https://img.cactes.com/20230810-110433-101.jpg)



ULB100HBLP TXOP vs Current@868MHz

![img](https://img.cactes.com/20230810-110443-981.jpg)



ULB100HBLP TXOP vs Current@915MHz

![img](https://img.cactes.com/20230810-110454-995.jpg)



### ULB100LBHP性能测试

ULB100LBHP TXOP@22dBm/470MHz

![img](https://img.cactes.com/20230810-110513-481.jpg)



ULB100LBHP TXOP@22dBm/500MHz

![img](https://img.cactes.com/20230810-110523-337.jpg)



ULB100LBHP Spurs@22dBm/470MHz

![img](https://img.cactes.com/20230810-110534-559.jpg)



ULB100LBHP Spurs@22dBm/500MHz

![img](https://img.cactes.com/20230810-110541-556.jpg)



ULB100LBHP TXOP vs Current@470MHz

![img](https://img.cactes.com/20230810-110548-669.jpg)



ULB100LBHP TXOP vs Current@500MHz

![img](https://img.cactes.com/20230810-110553-868.jpg)



### ULB100HBHP性能测试

ULB100HBHP TXOP@14dBm/868MHz

![img](https://img.cactes.com/20230810-110606-060.jpg)



ULB100HBHP TXOP@22dBm/915MHz

![img](https://img.cactes.com/20230810-110647-635.jpg)



ULB100HBHP Spurs@14dBm/868MHz

![img](https://img.cactes.com/20230810-110657-355.jpg)



ULB100HBHP Spurs@22dBm/915MHz

![img](https://img.cactes.com/20230810-110704-747.jpg)



ULB100HBHP TXOP vs Current@868MHz

![img](https://img.cactes.com/20230810-110710-808.jpg)



ULB100HBHP TXOP vs Current@915MHz

![img](https://img.cactes.com/20230810-110716-099.jpg)

## 物理尺寸

**外观3D图：**

![img](https://img.cactes.com/20230810-110856-539.jpg)



**俯视图：**

<img src="https://img.cactes.com/20230810-110839-224.png" alt="image-20230810110837959" style="zoom:50%;" />

**侧视图：（厚度=2.5mm）**

![img](https://img.cactes.com/20230810-110908-740.jpg)

## PCB封装建议

![image-20230810111004755](https://img.cactes.com/20230810-111005-977.png)

## 存储和焊接

### 储存

模组长时间保存应密封在防潮袋（MBB）中，置于非冷凝的大气环境中，保持<40°C和90%RH的环境。模块的湿度敏感度等级（MSL）为3。

开箱后，模块必须在工厂条件为25±5°C和相对湿度60%的环境中放置。如果不满足上述条件，则需要对模块进行烘焙。

### ESD

- Human body model (HBM): ±2000 V

- Charged-device model (CDM): ±500 V

### 回流焊

ULB100模组回流焊温度曲线图:

![img](https://img.cactes.com/20230810-105218-861.jpg)
