CREATE DATABASE react;
USE react;

CREATE TABLE black (
    email VARCHAR(30) NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (email)
);

CREATE TABLE shop (
    idx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    stationKor VARCHAR(12) NOT NULL,
    station VARCHAR(25) NOT NULL,
    line VARCHAR(16) NOT NULL,
    address VARCHAR(60) NOT NULL,
    parking CHAR(1) DEFAULT 'N',
    operhour VARCHAR(50),
    website VARCHAR(100),
    menu VARCHAR(350),
    beverage VARCHAR(400),
    tel VARCHAR(20),
    protein CHAR(1) DEFAULT 'N',
    photo CHAR(1) DEFAULT 'N',
    special CHAR(1) DEFAULT 'N',
    more VARCHAR(50),
    intro VARCHAR(500)
);

CREATE TABLE register (
    idx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(60) NOT NULL,
    store VARCHAR(30) NOT NULL,
    menu VARCHAR(30) NOT NULL,
    address VARCHAR(60) NOT NULL,
    sns VARCHAR(100) NOT NULL,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    state VARCHAR(30) NOT NULl DEFAULT 'FALSE'
);

CREATE TABLE review (
    idx INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    sidx INT ,
    storename VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    flavor INT,
    atmosphere INT,
    cheap INT,
    service INT,
    text VARCHAR(300),
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sidx) REFERENCES shop (idx)
);


insert into review(sidx, storename,email, flavor, atmosphere, cheap, service, text ) 
values(1,'도넛스토리', '619049@naver.com', 5, 5, 5, 5, '와 정말 맛있어요!');
insert into review(sidx,storename, email, flavor, atmosphere, cheap, service, text ) 
values(2,'서울페이스트리','619049@naver.com', 5, 5, 5, 5, '와 정말 비싸요!');

insert into register( email, store, menu, address, contact, sns) 
values('a','a','a','a','a','a');

alter table shop add img1 varchar(100);
alter table shop add img2 varchar(100);
alter table shop add img3 varchar(100);

update shop set img1='1_1.jpg', img2='1_2.jpg', img3='1_3.jpg' where idx=1;
update shop set img1='2_1.jpg', img2='2_2.jpg', img3='2_3.jpg' where idx=2;
update shop set img1='3_1.jpg', img2='3_2.jpg', img3='3_3.jpg' where idx=3;
update shop set img1='4_1.jpg', img2='4_2.jpg', img3='4_3.jpg' where idx=4;
update shop set img1='5_1.jpg', img2='5_2.jpg', img3='5_3.jpg' where idx=5;
update shop set img1='6_1.jpg', img2='6_2.jpg', img3='6_3.jpg' where idx=6;
update shop set img1='7_1.jpg', img2='7_2.jpg', img3='7_3.jpg' where idx=7;
update shop set img1='8_1.jpg', img2='8_2.jpg', img3='8_3.jpg' where idx=8;
update shop set img1='9_1.jpg', img2='9_2.jpg', img3='9_3.jpg' where idx=9;
update shop set img1='10_1.jpg', img2='10_2.jpg', img3='10_3.jpg' where idx=10;
update shop set img1='11_1.jpg', img2='11_2.jpg', img3='11_3.jpg' where idx=11;
update shop set img1='12_1.jpg', img2='12_2.jpg', img3='12_3.jpg' where idx=12;
update shop set img1='13_1.jpg', img2='13_2.jpg', img3='13_3.jpg' where idx=13;
update shop set img1='14_1.jpg', img2='14_2.jpg', img3='14_3.jpg' where idx=14;
update shop set img1='15_1.jpg', img2='15_2.jpg', img3='15_3.jpg' where idx=15;
update shop set img1='16_1.jpg', img2='16_2.jpg', img3='16_3.jpg' where idx=16;
update shop set img1='17_1.jpg', img2='17_2.jpg', img3='17_3.jpg' where idx=17;
update shop set img1='18_1.jpg', img2='18_2.jpg', img3='18_3.jpg' where idx=18;
update shop set img1='19_1.jpg', img2='19_2.jpg', img3='19_3.jpg' where idx=19;
update shop set img1='20_1.jpg', img2='20_2.jpg', img3='20_3.jpg' where idx=20;
update shop set img1='21_1.jpg', img2='21_2.jpg', img3='21_3.jpg' where idx=21;
update shop set img1='22_1.jpg', img2='22_2.jpg', img3='22_3.jpg' where idx=22;
update shop set img1='23_1.jpg', img2='23_2.jpg', img3='23_3.jpg' where idx=23;
update shop set img1='24_1.jpg', img2='24_2.jpg', img3='24_3.jpg' where idx=24;
update shop set img1='25_1.jpg', img2='25_2.jpg', img3='25_3.jpg' where idx=25;
update shop set img1='26_1.jpg', img2='26_2.jpg', img3='26_3.jpg' where idx=26;
update shop set img1='27_1.jpg', img2='27_2.jpg', img3='27_3.jpg' where idx=27;
update shop set img1='28_1.jpg', img2='28_2.jpg', img3='28_3.jpg' where idx=28;
update shop set img1='29_1.jpg', img2='29_2.jpg', img3='29_3.jpg' where idx=29;
update shop set img1='30_1.jpg', img2='30_2.jpg', img3='30_3.jpg' where idx=30;
update shop set img1='31_1.jpg', img2='31_2.jpg', img3='31_3.jpg' where idx=31;
update shop set img1='32_1.jpg', img2='32_2.jpg', img3='32_3.jpg' where idx=32;
update shop set img1='33_1.jpg', img2='33_2.jpg', img3='33_3.jpg' where idx=33;
update shop set img1='34_1.jpg', img2='34_2.jpg', img3='34_3.jpg' where idx=34;
update shop set img1='35_1.jpg', img2='35_2.jpg', img3='35_3.jpg' where idx=35;
update shop set img1='36_1.jpg', img2='36_2.jpg', img3='36_3.jpg' where idx=36;
update shop set img1='37_1.jpg', img2='37_2.jpg', img3='37_3.jpg' where idx=37;
update shop set img1='38_1.jpg', img2='38_2.jpg', img3='38_3.jpg' where idx=38;
update shop set img1='39_1.jpg', img2='39_2.jpg', img3='39_3.jpg' where idx=39;
update shop set img1='40_1.jpg', img2='40_2.jpg', img3='40_3.jpg' where idx=40;
update shop set img1='41_1.jpg', img2='41_2.jpg', img3='41_3.jpg' where idx=41;
update shop set img1='42_1.jpg', img2='42_2.jpg', img3='42_3.jpg' where idx=42;
update shop set img1='43_1.jpg', img2='43_2.jpg', img3='43_3.jpg' where idx=43;
update shop set img1='44_1.jpg', img2='44_2.jpg', img3='44_3.jpg' where idx=44;
update shop set img1='45_1.jpg', img2='45_2.jpg', img3='45_3.jpg' where idx=45;
update shop set img1='46_1.jpg', img2='46_2.jpg', img3='46_3.jpg' where idx=46;
update shop set img1='47_1.jpg', img2='47_2.jpg', img3='47_3.jpg' where idx=47;
update shop set img1='48_1.jpg', img2='48_2.jpg', img3='48_3.jpg' where idx=48;
update shop set img1='49_1.jpg', img2='49_2.jpg', img3='49_3.jpg' where idx=49;
update shop set img1='50_1.jpg', img2='50_2.jpg', img3='50_3.jpg' where idx=50;
update shop set img1='51_1.jpg', img2='51_2.jpg', img3='51_3.jpg' where idx=51;
update shop set img1='52_1.jpg', img2='52_2.jpg', img3='52_3.jpeg' where idx=52;
update shop set img1='53_1.jpg', img2='53_2.jpg', img3='53_3.jpg' where idx=53;
update shop set img1='54_1.jpg', img2='54_2.jpg', img3='54_3.jpg' where idx=54;
update shop set img1='55_1.jpg', img2='55_2.jpg', img3='55_3.jpg' where idx=55;
update shop set img1='56_1.jpg', img2='56_2.jpg', img3='56_3.jpg' where idx=56;
update shop set img1='57_1.jpg', img2='57_2.jpg', img3='57_3.jpg' where idx=57;

