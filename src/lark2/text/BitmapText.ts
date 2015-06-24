//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////


module egret {
    const enum Keys {
        /**
         * @private
         */
        textFieldWidth,
        /**
         * @private
         */
        textFieldHeight,
        /**
         * @private
         */
        text,
        /**
         * @private
         */
        lineSpacing,
        /**
         * @private
         */
        letterSpacing,
        /**
         * @private
         */
        font,
        /**
         * @private
         */
        fontStringChanged,
        /**
         * @private
         */
        textLinesChanged,

    }

    /**
     * @classdesc
     * @class egret.BitmapText
     * 位图字体采用了Bitmap+SpriteSheet的方式来渲染文字。
     * @extends egret.DisplayObject
     */
    export class BitmapText extends DisplayObject {

        /**
         * 创建一个 egret.BitmapText 对象
         */
        public constructor() {
            super();
            //this.cacheAsBitmap = true;

            this.$renderRegion = new sys.Region();
            this.$BitmapText = {
                0: NONE,    //textFieldWidth,
                1: NONE,    //textFieldHeight,
                2: "",      //text,
                3: 0,       //lineSpacing,
                4: 0,        //letterSpacing,
                5: null,        //font,
                6: false,        //fontStringChanged,
                7: false        //textLinesChanged,
            };
        }

        /**
         * @private
         */
        $BitmapText:Object;

        /**
         * @language en_US
         * A string to display in the text field.
         * @version Lark 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 要显示的文本内容
         * @version Lark 1.0
         * @platform Web,Native
         */
        public get text():string {
            return this.$BitmapText[Keys.text];
        }

        public set text(value:string) {
            if(value===null||value===undefined){
                value = "";
            }
            value = value + "";
            this.$setText(value);
        }

        /**
         * @private
         */
        $setText(value:string):void{
            var values = this.$BitmapText;
            if (value == values[Keys.text])
                return;
            values[Keys.text] = value;
            this.$invalidateContentBounds();
        }

        /**
         * @private
         */
        $getWidth():number {
            var w = this.$BitmapText[Keys.textFieldWidth];
            return isNone(w) ? this.$getContentBounds().width : w;
        }

        /**
         * @private
         */
        $setWidth(value:number) {
            value = +value || 0;
            var values = this.$BitmapText;
            if (value < 0 || value === values[Keys.textFieldWidth]) {
                return;
            }
            values[Keys.textFieldWidth] = value;
            this.$invalidateContentBounds();
        }

        /**
         * @private
         */
        $invalidateContentBounds():void {
            super.$invalidateContentBounds();
            this.$BitmapText[Keys.textLinesChanged] = true;
        }

        /**
         * @private
         */
        $getHeight():number {
            var h = this.$BitmapText[Keys.textFieldHeight];
            return isNone(h) ? this.$getContentBounds().height : h;
        }

        /**
         * @private
         */
        $setHeight(value:number) {
            value = +value || 0;
            var values = this.$BitmapText;
            if (value < 0 || value === values[Keys.textFieldHeight]) {
                return;
            }
            values[Keys.textFieldHeight] = value;
            this.$invalidateContentBounds();
        }

        /**
         * @language en_US
         * The name of the font to use, or a comma-separated list of font names.
         * @default "sans-serif"
         * @version Lark 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 要使用的字体的名称或用逗号分隔的字体名称列表。
         * @default "sans-serif"
         * @version Lark 1.0
         * @platform Web,Native
         */
        public get font():BitmapFont {
            return this.$BitmapText[Keys.font];
        }

        public set font(value:BitmapFont) {
            var values = this.$BitmapText;
            if (values[Keys.font] == value) {
                return;
            }
            values[Keys.font] = value;

            this.$BitmapText[Keys.fontStringChanged] = true;
            this.$invalidateContentBounds();
        }

        /**
        /**
         * @language en_US
         * An integer representing the amount of vertical space between lines.
         * @default 0
         * @version Lark 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 一个整数，表示行与行之间的垂直间距量
         * @default 0
         * @version Lark 1.0
         * @platform Web,Native
         */
        public get lineSpacing():number {
            return this.$BitmapText[Keys.lineSpacing];
        }

        public set lineSpacing(value:number) {
            value = +value || 0;
            var values = this.$BitmapText;
            if (values[Keys.lineSpacing] === value)
                return;
            values[Keys.lineSpacing] = value;
            this.$invalidateContentBounds();
        }

        /**
         * @language en_US
         * An integer representing the amount of vertical space between lines.
         * @default 0
         * @version Lark 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 一个整数，表示行与行之间的垂直间距量
         * @default 0
         * @version Lark 1.0
         * @platform Web,Native
         */
        public get letterSpacing():number {
            return this.$BitmapText[Keys.letterSpacing];
        }

        public set letterSpacing(value:number) {
            value = +value || 0;
            var values = this.$BitmapText;
            if (values[Keys.letterSpacing] === value)
                return;
            values[Keys.letterSpacing] = value;
            this.$invalidateContentBounds();
        }

        public static EMPTY_FACTOR:number = 0.33;

        /**
         * @private
         */
        $render(context:egret.sys.RenderContext):void {
            var self = this;
            var textLines:Array<string> = self._getTextLines();
            var length:number = textLines.length;
            if (length == 0) {
                return;
            }
            var bitmapFont:BitmapFont = self.$BitmapText[Keys.font];
            var emptyHeight:number = bitmapFont._getFirstCharHeight();
            var emptyWidth:number = Math.ceil(emptyHeight * BitmapText.EMPTY_FACTOR);
            var yPos:number = 0;
            var hasSetHeight:boolean = self.$BitmapText[Keys.textFieldHeight] != NONE;
            var textFieldHeight:number = self.$BitmapText[Keys.textFieldHeight];
            var lineHeights:Array<number> = self._lineHeights;
            for (var i:number = 0; i < length; i++) {
                var lineHeight:number = lineHeights[i];
                if (hasSetHeight && i > 0 && yPos + lineHeight > textFieldHeight) {
                    break;
                }
                var line:string = textLines[i];
                var len:number = line.length;
                var xPos:number = 0;
                for (var j:number = 0; j < len; j++) {
                    var character = line.charAt(j);
                    var texture = bitmapFont.getTexture(character);
                    if (!texture) {
                        if (character == " ") {
                            xPos += emptyWidth;
                        }
                        else {
                            egret.Logger.warningWithErrorId(1011, character);
                        }
                        continue;
                    }
                    var bitmapWidth:number = texture._bitmapWidth || texture._textureWidth;
                    var bitmapHeight:number = texture._bitmapHeight || texture._textureHeight;

                    context.drawImage(texture._bitmapData, texture._bitmapX, texture._bitmapY,
                        bitmapWidth, bitmapHeight, xPos + texture._offsetX, yPos + texture._offsetY, bitmapWidth, bitmapHeight);

                    xPos += texture._textureWidth + self.$BitmapText[Keys.letterSpacing];
                }
                yPos += lineHeight + self.$BitmapText[Keys.lineSpacing];
            }
        }

        /**
         * @private
         */
        $measureContentBounds(bounds:Rectangle):void {
            var lines:Array<string> = this._getTextLines();
            if (lines.length == 0) {
                bounds.setEmpty();
            }
            else {
                bounds.setTo(this._textOffsetX, this._textOffsetY, this._textWidth - this._textOffsetX,
                    this._textHeight - this._textOffsetY + (lines.length - 1) * this.$BitmapText[Keys.lineSpacing]);
            }
        }

        private _textWidth:number = 0;
        private _textHeight:number = 0;
        private _textOffsetX:number = 0;
        private _textOffsetY:number = 0;

        private _textLines:Array<string>;
        public _lineHeights:Array<number> = [];

        public _getTextLines():Array<string> {
            var self = this;
            if (!this.$BitmapText[Keys.textLinesChanged]) {
                return self._textLines;
            }
            var textLines:Array<string> = [];
            self._textLines = textLines;
            this.$BitmapText[Keys.textLinesChanged] = false;
            var lineHeights:Array<number> = [];
            self._lineHeights = lineHeights;
            if (!self.$BitmapText[Keys.text] || !self.$BitmapText[Keys.font]) {
                return textLines;
            }
            var textWidth:number = 0;
            var textHeight:number = 0;
            var textStartX:number = 0;
            var textStartY:number = 0;
            var hasWidthSet:boolean = self.$BitmapText[Keys.textFieldWidth] != NONE;
            var textFieldWidth:number = self.$BitmapText[Keys.textFieldWidth];
            var bitmapFont:BitmapFont = self.$BitmapText[Keys.font];
            var emptyHeight:number = bitmapFont._getFirstCharHeight();
            var emptyWidth:number = Math.ceil(emptyHeight * BitmapText.EMPTY_FACTOR);
            var text:string = self.$BitmapText[Keys.text];
            var textArr:Array<string> = text.split(/(?:\r\n|\r|\n)/);
            var length:number = textArr.length;
            var isFirstLine:boolean = true;
            for (var i = 0; i < length; i++) {
                var line:string = textArr[i];
                var len = line.length;
                var lineHeight:number = 0;
                var xPos:number = 0;
                var isFirstChar:boolean = true;
                for (var j = 0; j < len; j++) {
                    if (!isFirstChar) {
                        xPos += self.$BitmapText[Keys.letterSpacing];
                    }

                    var character = line.charAt(j);
                    var texureWidth:number;
                    var textureHeight:number;
                    var offsetX:number = 0;
                    var offsetY:number = 0;
                    var texture = bitmapFont.getTexture(character);
                    if (!texture) {
                        if (character == " ") {
                            texureWidth = emptyWidth;
                            textureHeight = emptyHeight;
                        }
                        else {
                            egret.Logger.warningWithErrorId(1011, character);
                            if (isFirstChar) {
                                isFirstChar = false;
                            }
                            continue;
                        }
                    }
                    else {
                        texureWidth = texture._textureWidth;
                        textureHeight = texture._textureHeight;
                        offsetX = texture._offsetX;
                        offsetY = texture._offsetY;
                    }
                    if (isFirstChar) {
                        isFirstChar = false;
                        textStartX = Math.min(offsetX, textStartX);
                    }
                    if (isFirstLine) {
                        textStartY = Math.min(offsetY, textStartY);
                    }
                    if (hasWidthSet && j > 0 && xPos + texureWidth > textFieldWidth) {
                        textLines.push(line.substring(0, j));
                        lineHeights.push(lineHeight);
                        textHeight += lineHeight;
                        textWidth = Math.max(xPos, textWidth);
                        line = line.substring(j);
                        len = line.length;
                        j = 0;
                        xPos = texureWidth;
                        lineHeight = textureHeight;
                        continue;
                    }
                    xPos += texureWidth;
                    lineHeight = Math.max(textureHeight, lineHeight);
                }
                if (isFirstLine) {
                    isFirstLine = false;
                }
                textLines.push(line);
                lineHeights.push(lineHeight);
                textHeight += lineHeight;
                textWidth = Math.max(xPos, textWidth);
            }
            self._textWidth = textWidth;
            self._textHeight = textHeight;
            self._textOffsetX = textStartX;
            self._textOffsetY = textStartY;
            return textLines;
        }
    }
}